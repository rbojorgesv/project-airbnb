const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Users = require("../models/user.model");

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
        {
            model: Places,
            
        },
        {
          model: Users,
          as: 'user'
        },
    ],
    // attributes: {
    //   exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    // },
  });

  // const data = await Users.findAll({
  //     include: {
  //         model: Accommodations,
  //         include: {
  //             model: Places,
  //             attributes:{
  //                 exclude: ['createdAt', 'updatedAt']
  //             }
  //         }
  //     }
  // })
  return data;
};

const getAccommodationById = async (id) => {
  const data = await Accommodations.findOne({
    where: {
      id,
    },
    include:[ {
      model: Places,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },{
      model: Users,
      as: 'user',
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }
  ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });
  return data;
};

const editAccomodations = async(roleId, data, usersId, accommodations) => {
  const {id, placesId, hostId, ...restOfProperties}= data
  if (id ===roleId && userId === hostId) {
    const response = await Accomodations.update(
      {...restOfProperties},
      {
        where: {
          id: accommodationId
        }
      }
    )
    return response
  }
}

const removeAccommodations = async (roleId, userId) => {
  if (id === roleId){
    const response = Accommodations.destroy({
      where:{
        id: userId
      }       
    })
  }
    return response
  }

module.exports = {
  getAllAccommodations,
  getAccommodationById,
  editAccomodations,
  removeAccommodations
};

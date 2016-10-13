// this file currently does nothing
// it is not linked anywhere

const clickedPhoto = (state = [], action) => {
  switch (action.type) {
    case 'CLICKED_PHOTO':
      return state.map((photo) => {
        if (photo.id !== action.id) {
          return photo;
        }

        return {
          photo: {
            clicked: !photo.clicked
          }

      // above option is what i think from below option tried in past.
        // return {
        //   photo.clicked = !photo.clicked
        //   // clicked: !photo.clicked
        // };
      };
    })

    default:
      return state;
  }
};

//     case 'CLICKED_PHOTO':
//     {
//       console.log(this.props);
//       return Object.assign({}, state, { clicked: !this.props.clicked })
//     }
//     default:
//       return state;
//   }
// }

export default clickedPhoto;

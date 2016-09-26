const clickedPhoto = (state = [], action) => {
  switch (action.type) {
    case 'CLICKED_PHOTO':
      return state.map(photo => {
        if (photo.id !== action.id) {
          console.log('harry potter, harry potter, harry potter', photo);
          return photo;
        }

      return {
        photo: {
          clicked: !clicked
        }
      //above option is what i think from below option tried in past.
        // return {
        //   photo.clicked = !photo.clicked
        //   // clicked: !photo.clicked
        // };
      };
    })

    default:
    console.log('hermoine granger, hermoine granger, hermoine granger');
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

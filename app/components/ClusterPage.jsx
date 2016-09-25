// individual cluster view of 12 photos
import ClusterPhotoTile from 'components/ClusterPhotoTile';
import ClusterTitleCard from 'components/ClusterTitleCard';
import Radium from 'radium';
import React from 'react';
import colors from 'components/Colors';

const ClusterPage = React.createClass({
  render() {
    const styles = {
      sClusterTitle: {
        width: 500,
        height: 100
      },

      base: {
        boxSizing: 'border-box',

        // backgroundColor: '#cccff1',
        // borderColor: 'honeydew',
        // padding: '1.5em',
        // height: '200px',
        // borderWidth: '1px',
        width: '20%',
        paddingBottom: '20%',
        borderStyle: 'solid',
        display: 'inline-block',
        margin: '0',
        position: 'relative',
        ':hover': {
          background: 'yellow'
        },

        '@media (max-width: 1440px)': {
          width: '25%',
          paddingBottom: '24%'
        },

        '@media (max-width: 1220px)': {
          width: `${100 / 3}%`,
          paddingBottom: '33%'
        },

        '@media (max-width: 900px)': {
          width: '50%',
          paddingBottom: '45%'
        },

        '@media (max-width: 560px)': {
          width: '100%',
          paddingBottom: '92%'
        }
      },

      block: {
        display: 'inline-block',
        width: '50%',

        ':hover': {
          boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
        }
      },

      sect: {

        // justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: colors.primeBoldTrans
      }
    };

    return <div>
      <ClusterTitleCard
        style={styles.sClusterTitle}
      />
      <section
        style={styles.sect}
      >
        {this.props.photos.map((photo, i) => <div
          key={i}
          style={styles.base}
        >
          <ClusterPhotoTile
            {...this.props}
            i={i}
            key={i}
            photo={photo}
          />
        </div>
      )}
      </section>
      {/* <RaisedButton label="More" style={colors.primeBold} /> */}
    </div>;
  }
});

//
//     return <div>
//
//       <ClusterTitleCard
//         style={styles.sClusterTitle}
//       />
//       <div>
//         <section
//           style={styles.sect}
//         >
//           <div
//             style={styles.base}
//             key={4}
//           >
//             <ClusterPhotoTile
//               key={5}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={6}
//           >
//             <ClusterPhotoTile
//               key={7}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={8}
//           >
//             <ClusterPhotoTile
//               key={9}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={10}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={11}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={12}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={13}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={14}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={15}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={16}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={17}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={18}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={19}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={20}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={21}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={22}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={23}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={24}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={25}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={26}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={27}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={28}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={29}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={30}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={31}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={32}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={33}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={34}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={35}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={36}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={37}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={38}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={39}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={40}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={41}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={42}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={43}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={44}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={45}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={46}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={47}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={48}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={49}
//             />
//           </div>
//           <div
//             style={styles.base}
//             key={50}
//           >
//             <ClusterPhotoTile
//               style={styles.base}
//               key={51}
//             />
//           </div>
//         </section>
//       </div>
//     </div>;
//   }
// });

export default Radium(ClusterPage);

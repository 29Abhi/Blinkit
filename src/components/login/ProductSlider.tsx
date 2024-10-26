import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {imageData} from '@utils/dummyData';
import AutoScroll from '@homielab/react-native-auto-scroll';
import { screenHeight, screenWidth } from '@utils/Scalling';
const ProductSlider = () => {
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < imageData.length; i++) {
      result.push(imageData.slice(i, i + 4));
    }
    return result;
  }, []);
  return (
    <View pointerEvents="none">
      <AutoScroll>
        <View>
          {rows?.map((row: any, rowIndex: number) => {
            return <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />;
          })}
        </View>
      </AutoScroll>
    </View>
  );
};

const Row: FC<{row: typeof imageData; rowIndex: number}> = ({
  row,
  rowIndex,
}) => {
  return (
    <View>
      {row.map((image, imafeIndex) => {
        return (
          <View style={[styles.itemContainer]} >
            <Image source={image} style={styles.image} />
          </View>
        );
      })}
    </View>
  );
};

const MemoizedRow = React.memo(Row);

export default ProductSlider;

const styles = StyleSheet.create({
    itemContainer : {
        marginBottom : 12,
        marginHorizontal: 10,
        width: screenWidth * 0.26,
        height: screenHeight * 0.26,
        backgroundColor: '#e9f7f8',
        borderRadius: 25,
        alignItems: 'center'
    },
    image : {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    }
});

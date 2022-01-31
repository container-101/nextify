export const UImageSetter = (livingType, houseImages, roomImages) => {
  const imageList =
    livingType === 'private' ? [...roomImages, ...houseImages] : [...roomImages, ...houseImages]

  return imageList
}

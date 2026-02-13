import { SRGBColorSpace, Texture } from 'three';
import { useTexture } from '@react-three/drei';

type TBookPageTextures = [Texture, Texture, Texture?];

interface IUseBookPageTexturesParams {
  front: string;
  back: string;
  number: number;
  pagesLength: number;
}

export const useBookPageTextures = ({
  front,
  back,
  number,
  pagesLength,
}: IUseBookPageTexturesParams): TBookPageTextures => {
  const textures = useTexture([
    `${import.meta.env.BASE_URL}textures/${front}.jpg`,
    `${import.meta.env.BASE_URL}textures/${back}.jpg`,
    ...(number === 0 || number === pagesLength - 1
      ? [`${import.meta.env.BASE_URL}textures/book-cover-roughness.jpg`]
      : []),
  ]) as TBookPageTextures;

  const [rawPicture, rawPicture2, rawPictureRoughness] = textures;

  const picture = rawPicture.clone();
  picture.colorSpace = SRGBColorSpace;

  const picture2 = rawPicture2.clone();
  picture2.colorSpace = SRGBColorSpace;

  const pictureRoughness = rawPictureRoughness?.clone();
  if (pictureRoughness) {
    pictureRoughness.colorSpace = SRGBColorSpace;
  }

  return [picture, picture2, pictureRoughness];
};

import { SRGBColorSpace, Texture } from 'three';
import { useTexture } from '@react-three/drei';

type BookPageTextures = [Texture, Texture, Texture?];

interface UseBookPageTexturesParams {
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
}: UseBookPageTexturesParams): BookPageTextures => {
  const textures = useTexture([
    `/textures/${front}.jpg`,
    `/textures/${back}.jpg`,
    ...(number === 0 || number === pagesLength - 1
      ? [`/textures/book-cover-roughness.jpg`]
      : []),
  ]) as BookPageTextures;

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

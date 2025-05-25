// components/InteractiveGuideImage.tsx
"use client"; // 이 컴포넌트를 클라이언트 컴포넌트로 만듭니다.

import Image from "next/image";
import type { ImageProps } from "next/image"; // ImageProps 타입을 가져옵니다.

interface InteractiveGuideImageProps extends Omit<ImageProps, 'onError' | 'alt'> {
  src: string; // src는 string 타입으로 명시
  alt: string; // alt는 string 타입으로 명시
  fallbackSrc?: string; // 로드 실패 시 보여줄 대체 이미지 경로 (선택 사항)
}

export default function InteractiveGuideImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc,
  ...props
}: InteractiveGuideImageProps) {
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`이미지 로드 실패: ${src}`);
    if (fallbackSrc) {
      // 대체 이미지가 있으면 대체 이미지로 변경
      e.currentTarget.src = fallbackSrc;
    } else {
      // 대체 이미지가 없으면 기본적으로 Next.js의 깨진 이미지 아이콘이 표시되거나,
      // 여기서 추가적인 스타일링을 통해 안 보이게 할 수 있습니다.
      // 예: e.currentTarget.style.display = 'none';
      // 또는 부모 요소에 특정 클래스를 추가하여 UI를 변경할 수도 있습니다.
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError} // 클라이언트 컴포넌트 내에서는 이벤트 핸들러 사용 가능
      {...props} // 나머지 ImageProps 전달
    />
  );
}
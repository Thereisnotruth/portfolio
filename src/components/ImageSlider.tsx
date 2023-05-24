import { useRef, useState, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

function ImageSlider({ images }: any) {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [transX, setTransX] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(1);

  // 드래그하기 위해 터치 시 시작 좌표 설정
  const onTouchDown = (event: React.TouchEvent<HTMLElement>) => {
    setStartX(event.touches[0].clientX);
  };

  // 왼쪽 이미지 보기
  const handleImageLeft = () => {
    if (imageIndex > 0) {
      imageSliderRef.current!.style.transition = '0.2s';
      setImageIndex(imageIndex - 1);
    }
  };

  // 오른쪽 이미지 보기
  const handleImageRight = () => {
    if (imageIndex < images.length + 1) {
      imageSliderRef.current!.style.transition = '0.2s';
      setImageIndex(imageIndex + 1);
    }
  };

  // 드래그한 후에 마우스를 뗄 때에 어떻게 이동시킬지
  const onTouchUp = () => {
    // transX는 현재 좌표 - 시작 좌표
    // 음수면 오른쪽으로 넘기기
    // transX가 이미지 가로길이의 절반을 넘어가면 넘김
    if (transX < -40) {
      handleImageRight();
    }
    // 양수면 왼쪽으로 넘기기
    if (transX > 40) {
      handleImageLeft();
    }
    // 드래그 후 transX를 0으로 초기화
    setTransX(0);
  };

  // 드래그하면서 transX의 값 변경
  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    // 현재 터치 중인 x좌표 - 시작 x좌표
    setTransX(event.touches[0].clientX - startX);
  };

  const resize = () => {
    if (imageRef.current !== null) {
      setWidth(imageRef.current.clientWidth);
    }
  };
  useEffect(() => {
    if (imageIndex == 0) {
      setTimeout(() => {
        imageSliderRef.current!.style.transition = 'none';
        imageSliderRef.current!.style.transform = `translateX(${width * images.length}px)`;
        setImageIndex(images.length);
      }, 200);
    }
    if (imageIndex == images.length + 1) {
      setTimeout(() => {
        imageSliderRef.current!.style.transition = 'none';
        imageSliderRef.current!.style.transform = `translateX(${-1 * width * images.length}px)`;
        setImageIndex(1);
      }, 200);
    }
  }, [imageIndex]);

  // 맨 처음 렌더링했을때 width 초기화
  useEffect(() => {
    if (imageRef.current !== null) {
      setWidth(imageRef.current.clientWidth);
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="image-slider">
      <button
        type="button"
        className="image-slider__control transparent-button"
        onClick={handleImageLeft}
      >
        <MdArrowBackIosNew />
      </button>
      <div className="image-slider__container" ref={imageRef}>
        <div
          ref={imageSliderRef}
          className="image-slider__images"
          role="presentation"
          style={{
            transform: `translateX(${-1 * imageIndex * width + transX}px)`,
          }}
          onTouchStart={onTouchDown}
          onTouchEnd={onTouchUp}
          onTouchMove={handleTouchMove}
        >
          <img
            src={`images/${images[images.length - 1]}`}
            width={width}
            className="image-slider__image"
            alt="sample"
          />
          {images.map((image: string) => (
            <img
              src={`images/${image}`}
              key={image}
              width={width}
              className="image-slider__image"
              alt="sample"
            />
          ))}
          <img
            src={`images/${images[0]}`}
            width={width}
            className="image-slider__image"
            alt="sample"
          />
        </div>
      </div>
      <button
        type="button"
        className="image-slider__control transparent-button"
        onClick={handleImageRight}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default ImageSlider;

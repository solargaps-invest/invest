import { ComponentProps, PropsWithChildren } from 'react';
import { default as SlickSlider } from 'react-slick';
import { NextArrow } from './next-arrow.components';
import { PrevArrow } from './prev-arrow.component';

type SliderProps = PropsWithChildren<ComponentProps<typeof SlickSlider>>;

export const Slider = ({ children, ...rest }: SliderProps) => {
	return (
		<SlickSlider nextArrow={<NextArrow />} prevArrow={<PrevArrow />} {...rest}>
			{children}
		</SlickSlider>
	);
};

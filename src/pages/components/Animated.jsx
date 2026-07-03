import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AnimatedText_Section = ({
	text
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: false});
	const controls = useAnimation();

	useEffect(() => {
		if(isInView){
			async function sequence() {
				// OnEnter
				await controls.start({
					opacity: 1,
					y: 0,
					transition:{
						duration: 1
					}
				});

				// WhileVisible
				controls.start({
					scaleY: [1, 1.2, 1],
					transition: {
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					}
				})
			}
			sequence();
		}
		else{
			controls.start({
				opacity: 0, y: 20
			});
		}
	}, [isInView]);

	return(
		<motion.h3
			ref={ref}
			initial={{ opacity: 0 }}
			animate={controls}
		>
			{text}
		</motion.h3>
	)
}

export const AnimatedText_TitleSmall = ({
	text
}) => {
	return(
		<motion.h5
			initial={{ opacity: 0 }}
			transition={{ duration: 3, ease: "easeOut" }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
		>
			{text}
		</motion.h5>
	)
}

export const AnimatedText_TitleBig = ({
	text
}) => {
	return(
		<motion.h4
			initial={{ opacity: 0 }}
			transition={{ duration: 3, ease: "easeOut" }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
		>
			{text}
		</motion.h4>
	)
}

export const AnimatedText_Normal = ({
	text
}) => {
	return(
		<motion.p
			initial={{ opacity: 0}}
			transition={{ duration: 3, ease: "easeOut" }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
		>
			{text}
		</motion.p>
	)
}

export const AnimatedImage = ({
	image,
	width
}) => {
	return(
		<motion.img
			initial={{ opacity: 0}}
			transition={{ duration: 3, ease: "easeOut" }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}

			src={image}
			width={width}
		/>
	)
}
import { useState } from "react";
import {motion} from "framer-motion";

import "./GatefoldLayer.css"

export const GatefoldLayer = ({
	onClose
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return(
		<div 
			className="GatefoldLayer" 
			onClick = {() => setIsOpen(!isOpen)}
		>
			{/* Door Left */}
			<motion.div
				className="gate left"
				initial = {false}
				animate = {{
					x: isOpen ? "-100%" : "0%"
				}}
				transition = {{
					duration: 1.5,
					ease: [0.2, 1, 0.6, 1, 0.9, 1, 1, 1]
				}}
				onAnimationComplete = {() => {
					if(isOpen) onClose();
				}}
			>
					<div className="paper left" style={{flex: 3}}>
						<div className="light"/>
					</div>
					
					<div className="wood" style={{flex: 1}}>
					</div>
			</motion.div>

			{/* Door right */}
			<motion.div
				className="gate right"
				initial = {false}
				animate = {{
					x: isOpen ? "100%" : "0%"
				}}
				transition = {{
					duration: 1.5,
					ease: [0.2, 1, 0.6, 1, 0.9, 1, 1, 1]
				}}
			>
				<div className="paper right" style={{flex: 3}}>
					<div className="light"/>
				</div>
				
				<div className="wood" style={{flex: 1}}>
				</div>
			</motion.div>
		</div>
	)
}
import { motion } from "framer-motion";

import "./BackgroundLayer.css";

import Fantasy_Background from "@images/bkg_fantasy.png";
import Fantasy_Tree from "@images/bkg_tree-C.png";

import Sakura_Tree_A from "@images/sakura-tree_A.png";
import Sakura_Tree_B from "@images/sakura-tree_B.png";
import Sakura_Tree_C from "@images/sakura-tree_C.png";
import Sakura_Tree_D from "@images/sakura-tree_D.png";

import Paper_Tree_A from "@images/paper-tree_A.png";
import Paper_Tree_B from "@images/paper-tree_B.png";
import Paper_Tree_C from "@images/paper-tree_C.png";
import Paper_Tree_D from "@images/paper-tree_D.png";

import Night_Tree_A from "@images/night-tree_A.png";
import Night_Tree_B from "@images/night-tree_B.png";
import Night_Tree_C from "@images/night-tree_C.png";
import Night_Tree_D from "@images/night-tree_D.png";

import Mountain from "@images/mountain.png";

export const BackgroundLayer = ({
	theme
}) => {
	const rootStyles = getComputedStyle(document.documentElement);
	
	const gradientMain = rootStyles.getPropertyValue("--gradient-background-a");
	const gradientSwap = rootStyles.getPropertyValue("--gradient-background-swap");

	const TreeImages = {
		fantasy: {
			tree_a: Night_Tree_A,
			tree_b: Night_Tree_B,
			tree_c: Night_Tree_C,
			tree_d: Night_Tree_D,
		},
		sakura: {
			tree_a: Sakura_Tree_A,
			tree_b: Sakura_Tree_B,
			tree_c: Sakura_Tree_C,
			tree_d: Sakura_Tree_D,
		},
		paper: {
			tree_a: Paper_Tree_A,
			tree_b: Paper_Tree_B,
			tree_c: Paper_Tree_C,
			tree_d: Paper_Tree_D,
		},
		night: {
			tree_a: Night_Tree_A,
			tree_b: Night_Tree_B,
			tree_c: Night_Tree_C,
			tree_d: Night_Tree_D,
		}
	};

	let IntroContent;

	if(theme === "fantasy"){
		IntroContent = (
			<>
				<BackgroundMid_Fantasy customImage={Fantasy_Background}/>
				<BackgroundLeft_Fantasy customImage={Fantasy_Tree}/>
				<BackgroundRight_Fantasy customImage={Fantasy_Tree}/>
			</>
		);
	}
	else{
		IntroContent = (
			<>
				<BackgroundLeft_Classic_A customImage={TreeImages[theme].tree_a}/>
				<BackgroundLeft_Classic_B customImage={TreeImages[theme].tree_b}/>
				<BackgroundLeft_Classic_C customImage={TreeImages[theme].tree_c}/>
				<BackgroundLeft_Classic_D customImage={TreeImages[theme].tree_d}/>

				<BackgroundRight_Classic customImage={Mountain}/>
			</>
		);
	}

	return(
		<motion.div className="BackgroundLayer"
			style={{"--gradient-background-a": gradientMain}}
			animate={{
				"--gradient-background-a": [
					`${gradientMain}`,
					`${gradientSwap}`,
					`${gradientMain}`
				]
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			}}
		>
			{IntroContent}
		</motion.div>
	)
}

const BackgroundLeft_Classic_A = ({ customImage }) => {
	return(
		<div className="background-left"  style={{zIndex:"1"}}>
			<motion.img src={customImage}
				animate={{
					x: [-3,3,-3],
					y: [0,-3,0]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
		</div>
	)
}

const BackgroundLeft_Classic_B = ({ customImage }) => {
	return(
		<motion.div className="background-left" style={{zIndex:"2"}}>
			<img src={customImage}/>
		</motion.div>
	)
}

const BackgroundLeft_Classic_C = ({ customImage }) => {
	return(
		<div className="background-left"  style={{zIndex:"3"}}>
			<motion.img src={customImage}
				animate={{
					x: [-6,6,-6],
					y: [0, -6, 0]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
		</div>
	)
}

const BackgroundLeft_Classic_D = ({ customImage }) => {
	return(
		<div className="background-left"  style={{zIndex:"4"}}>
			<motion.img src={customImage}
				animate={{
					x: [-10,10,-10],
					y: [0, -8, 0]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
		</div>
	)
}

const BackgroundRight_Classic = ({ customImage }) => {
	return(
		<div className="background-right">
			<img src={customImage}/>
		</div>
	)
}

const BackgroundMid_Fantasy = ({ customImage }) => {
	return(
		<div
			className="background-mid-fantasy" 
			style={{
				position: 'absolute',
				zIndex: '1',
				width: '100%',
				height: '100%',
			}}
		>
			<img src={customImage}
				style={{
					width: '100%',
					height: '90%',
					objectPosition: "bottom center"
				}}
			/>
		</div>
	)
}

const BackgroundLeft_Fantasy = ({ customImage }) => {
	return(
		<div className="background-left"
			style={{
				transform: 'translate(-450px, 50px) scale(-1,1)',
				zIndex: "2"
			}}
		>
			<img src={customImage}
				style={{
					maxWidth: '90%'
				}}
			/>
		</div>
	)
}

const BackgroundRight_Fantasy = ({ customImage }) => {
	return(
		<div className="background-right"
			style={{
				transform: 'translate(480px, 100px)',
				zIndex: "2"
			}}
		>
			<img src={customImage}
				style={{
					maxWidth: '75%'
				}}
			/>
		</div>
	)
}
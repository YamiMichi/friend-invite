import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import "./PageInvitation.css";

import { Flowers, Petals } from "./components/ParticlesLayer";

import { BackgroundLayer } from "./layers/BackgroundLayer";
import { MainLayer } from "./layers/MainLayer";
import { GatefoldLayer } from "./layers/GatefoldLayer";
import { ThemesLayer } from "./layers/ThemesLayer";
import { ButtonsLayer } from "./layers/ButtonsLayer";

import Dango from "../assets/audio/Dango.mp3";
import Senbonzakura from "../assets/audio/Senbonzakura.mp3";

function PageInvitation(){
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//+ THEMES                                                                                    +
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	const Themes = Object.freeze({
		SAKURA: "sakura",
		PAPER: "paper",
		NIGHT: "night"
	});
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ?? Themes.SAKURA);
	const changeTheme = (themeName) => {setTheme(themeName)};

	//TODO Check swap code for gradients...........................................................
	//! Used to force swap.........................................................................
	const [gradientMain, setGradientMain] = useState("");
	const [gradientSwap, setGradientSwap] = useState("");
	//! ...........................................................................................

	useEffect(() => {
		localStorage.setItem("theme",theme);

		document.documentElement.setAttribute(
			"data-theme",
			theme
		);

		//! Used to force swap.....................................................................
		const styles = getComputedStyle(document.documentElement);
		setGradientMain(
			styles.getPropertyValue("--gradient-background-a")
		);

		setGradientSwap(
			styles.getPropertyValue("--gradient-background-swap")
		);
		//! .......................................................................................
	}, [theme]);

	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//+ LAYERS                                                                                    +
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	const [showThemes, setShowThemes] = useState(false);
	const [showGate, setShowGate] = useState(true);

	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//+ AUDIO                                                                                     +
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);
	
	const toggleAudio = async () => {
		const audio = audioRef.current;

		if(!audioRef.current) return;

		if(audio.paused){
			try{
				await audio.play();
				setIsPlaying(true);
			}catch(e){}
		}
		else{
			audio.pause();
			audio.currentTime = 0;
			setIsPlaying(false);
		}
	}
	
	return(
		<div className="Invite">
			{/* Layer: Background */}
			<BackgroundLayer
				theme={theme}
			/>

			{/* Layer: Particles */}
			<Petals 
				theme={theme}
			/>
			<Flowers 
				theme={theme}
			/>

			{/* Layer: MainLayer */}
			<MainLayer
				theme={theme}
				showGate={showGate}
			/>

			{/* Layer: GateFold */}
			<AnimatePresence>
				{showGate &&
					<GatefoldLayer
						onClose={() => {
							if(!isPlaying) toggleAudio();
							setShowGate(false)
						}}
					/>
				}
			</AnimatePresence>

			{/* Layer: Buttons */}
			{showThemes && (<ThemesLayer
				setShowThemes={() => setShowThemes(!showThemes)}
				changeTheme={changeTheme}
			/>)}

			{/*<PlayButton*/}
			<ButtonsLayer
				setShowThemes={() => setShowThemes(!showThemes)}
				isPlaying={isPlaying}
				toggleAudio={toggleAudio}
			/>

			{/* Audio  */}
			<audio ref={audioRef} loop>
				<source src={Senbonzakura} type="audio/mpeg"/>
			</audio>
		</div>
	);
}

export default PageInvitation;
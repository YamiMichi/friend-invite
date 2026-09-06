import { useState } from "react";
import { motion } from "framer-motion";

import "./MainLayer.css"

import PortraitBorder from "@images/border.png";
import PortraitPokemon from "@images/pokes.png";

import SalonFantasy from "@images/salon-fantasy.png";
import SalonSakura from "@images/salon-sakura.png";
import SalonPaper from "@images/salon-paper.png";
import SalonNight from "@images/salon-night.png";

import CatedralFantasy from "@images/catedral-fantasy.png";
import CatedralSakura from "@images/catedral-sakura.png";
import CatedralPaper from "@images/catedral-paper.png";
import CatedralNight from "@images/catedral-night.png";

import VestimentaFantasy from "@images/vestimenta-fantasy.png";
import VestimentaSakura from "@images/vestimenta-sakura.png";
import VestimentaPaper from "@images/vestimenta-paper.png";
import VestimentaNight from "@images/vestimenta-night.png";

import SobreFantasy from "@images/sobre-fantasy.png";
import SobreSakura from "@images/sobre-sakura.png";
import SobrePaper from "@images/sobre-paper.png";
import SobreNight from "@images/sobre-night.png";

import RegalosFantasy from "@images/regalos-fantasy.png";
import RegalosSakura from "@images/regalos-sakura.png";
import RegalosPaper from "@images/regalos-paper.png";
import RegalosNight from "@images/regalos-night.png";

import { CustomColorBox, CustomColorBox_NoBkg, CustomMarginBox } from "../components/Boxes";
import { Timer, DateUTC, DateMX } from "../components/Timer";
import { AnimatedText_Section, AnimatedText_TitleSmall, AnimatedText_TitleBig, AnimatedText_Normal, AnimatedImage } from "../components/Animated";

export const MainLayer = ({
	theme,
	showGate
}) => {
	{/* Date: YYYY-MM-DD T HH:mm:ss.sss Z*/}
	{/* 'Z' indicates UTC format */}
	{/* CDMX on december was UTC-6 */}
	//const targetDate = new Date("2026-12-04T20:00:00Z");
	const targetDate = new Date("2026-12-05T01:30:00Z");

	const [showMapChurch, setShowMapChurch] = useState(false);
	const [showMapSalon, setShowMapSalon] = useState(false);

	const churchURL = "https://maps.app.goo.gl/vxp5hZrnYzufdRbH9";
	const salonURL = "https://maps.app.goo.gl/LsfWtkahmtMsVYjcA";

	const ThemeImages = {
		fantasy: {
			salon: SalonFantasy,
			catedral: CatedralFantasy,
			vestimenta: VestimentaFantasy,
			sobre: SobreFantasy,
			regalos: RegalosFantasy
		},
		sakura: {
			salon: SalonSakura,
			catedral: CatedralSakura,
			vestimenta: VestimentaSakura,
			sobre: SobreSakura,
			regalos: RegalosSakura
		},
		paper: {
			salon: SalonPaper,
			catedral: CatedralPaper,
			vestimenta: VestimentaPaper,
			sobre: SobrePaper,
			regalos: RegalosPaper
		},
		night: {
			salon: SalonNight,
			catedral: CatedralNight,
			vestimenta: VestimentaNight,
			sobre: SobreNight,
			regalos: RegalosNight
		}
	}


	return(
		<div className="MainLayer">
			<div className="container">
				{/* --------------------------------------------------------------------------- */}
				{/* Section: Intro */}
				{theme === "fantasy" 
					? <Portrait_Fantasy showGate={showGate} />
					: <Portrait_Classic showGate={showGate} />
				}

				{/* --------------------------------------------------------------------------- */}
				{/* Section: Date */}
				<CustomColorBox>
					<AnimatedText_Section text={"- Fecha -"}/>
				</CustomColorBox>

				<CustomMarginBox>
					<div className="section-vertical">
						<AnimatedText_TitleSmall text={"Nos casamos el"}/>
						<AnimatedText_TitleBig text={"4 de Diciembre"}/>
						<div style={{height:"20px"}}></div>
						<AnimatedText_TitleSmall text={"Faltan"}/>
						<Timer targetDate={targetDate}/>
						<AnimatedText_TitleSmall text={"para nuestra boda"}/>
					</div>
				</CustomMarginBox>

				{/* --------------------------------------------------------------------------- */}
				{/* Section: Locations */}
				{/* Location A: Church ........................................................ */}
				<CustomColorBox>
					<AnimatedText_Section text={"- Ceremonia -"}/>
				</CustomColorBox>

				<CustomMarginBox>
					<div className="section-vertical">
						<AnimatedText_TitleSmall text={"Catedral Jésus"}/>
						<AnimatedText_TitleBig text={"Señor de la Misericordia"}/>
						<AnimatedImage image={ThemeImages[theme].catedral} width={"100%"}/>
						<AnimatedText_Normal text={"Ubicación:"}/>
						<AnimatedText_Normal text={"Av. Gustavo Baz #174, Col. Benito Juarez 3ra sección, Nezahualcóyotl Estado de México, CP. 57000"}/>
						<AnimatedText_Normal text={"Hora: 7:30pm"}/>
					</div>

					<div className="separate"/>
					<div className="section-horizontal">
						<button className="button-txtimg" onClick={() => setShowMapChurch(!showMapChurch)}>
							{showMapChurch ? "-Ocultar Mapa-" : "-Mostrar Mapa-"}
						</button>
						<button className="button-txtimg" onClick={() => window.open(churchURL, "_blank")}>
							-Abrir Maps-
						</button>
					</div>

					{showMapChurch && (<div className="separate"/>)}
					{showMapChurch && (
						<div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0786444756936!2d-99.0009712!3d19.4090077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e33a6c3eaceb%3A0xe888398265d0e208!2sCatedral%20Jes%C3%BAs%20Se%C3%B1or%20de%20la%20Misericordia!5e0!3m2!1ses!2smx!4v1780719952158!5m2!1ses!2smx"
								width="100%"
								height="450px"
								style={{border:0}}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade">
							</iframe>
						</div>
					)}
				</CustomMarginBox>

				{/* Location A: Salon.......................................................... */}
				<CustomColorBox>
					<AnimatedText_Section text={"- Celebración -"}/>
				</CustomColorBox>

				<CustomMarginBox>
					<div className="section-vertical">
						<AnimatedText_TitleSmall text={"Salón"}/>
						<AnimatedText_TitleBig text={"La Hacienda"}/>
						<AnimatedImage image={ThemeImages[theme].salon} width={"100%"}/>
						<AnimatedText_Normal text={"Ubicación:"}/>
						<AnimatedText_Normal text={"Av. Ángel de la Independencia #330, Evolucion, Nezahualcóyotl Estado de México, CP. 57700"}/>
						<AnimatedText_Normal text={"Hora: 8:00pm"}/>
					</div>

					<div className="separate"/>
					<div className="section-horizontal">
						<button className="button-txtimg" onClick={() => setShowMapSalon(!showMapSalon)}>
							{showMapSalon ? "-Ocultar Mapa-" : "-Mostrar Mapa-"}
						</button>
						<button className="button-txtimg" onClick={() => window.open(salonURL, "_blank")}>
							-Abrir Maps-
						</button>
					</div>

					{showMapSalon && (<div className="separate"/>)}
					{showMapSalon && (
						<div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1582.2643080890284!2d-99.02564498221668!3d19.40030673322993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd4f3eed75f3%3A0x46e5c9224b9f980b!2sSalon%20La%20Hacienda!5e0!3m2!1ses-419!2smx!4v1781023806536!5m2!1ses-419!2smx"
								width="100%" 
								height="450px"
								style={{border:0}}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade">
							</iframe>
						</div>
					)}
				</CustomMarginBox>

				{/* ------------------------------------------------------------------------------- */}
				{/* Section: Vestiment code */}
				<CustomColorBox>
					<AnimatedText_Section text={"- Vestimenta -"}/>
				</CustomColorBox>

				<CustomMarginBox>
					<div className="section-vertical">
						<AnimatedText_TitleBig text={"Temática japonesa"}/>
						<AnimatedText_TitleSmall text={"[No es obligatorio]"}/>
						<AnimatedText_Normal 
							style={{marginBottom:"0px"}}
							text={"Estas invitado a usar algunos tipos de prendas que esten dentro de tu preferrencia como:"}/>
						<AnimatedText_Normal text={"Kimono, Yukata, Haori, Jinbei, Hakama ó cualquier ropa tradicional asiática."}/>
						<AnimatedImage image={ThemeImages[theme].vestimenta} width={"100%"}/>

						<div style={{height:"10px"}}/>

						<CustomColorBox_NoBkg>
							<div className="section-vertical">
								<h5 style={{color:"#f00"}}>PROHIBIDO</h5>
								<p style={{color:"#fff"}}>Evitar el uso de prendas color aquamarino | esmeralda ya que será el color de vestimenta que usara la novia.</p>
								<div style={{display:"flex", justifyContent:"center", padding:"10px"}}>
									<div style={{width:"200px", height:"200px", backgroundColor:"#00ffbf", borderRadius:"100px"}}/>
								</div>
							</div>
						</CustomColorBox_NoBkg>
					</div>
				</CustomMarginBox>
				
				{/* ------------------------------------------------------------------------------- */}
				{/* Section: Presents */}
				<CustomColorBox>
					<AnimatedText_Section text={"- Regalos -"}/>
				</CustomColorBox>

				<CustomMarginBox>
					<div className="section-vertical">
						<AnimatedText_TitleBig text={"Sobre de regalo"}/>
						<AnimatedText_Normal text={"Debido a la tématica inspirada en la cultura japonesa no emplearemos la zapatilla para recibir dinero ya que nos gustaría recibirlo dentro de un sobre."}/>
						<AnimatedText_Normal text={"Al sobre de regalo se le conoce como \"shugi-bukuro (祝儀袋)\", normalmente el diseño es de papel blanco con un lazo elaborado donde el color representa el tipo de fortuna que nos deseas."}/>
						<AnimatedImage image={ThemeImages[theme].sobre} width={"100%"}/>
					</div>
					<div className="separate"/>
					<div className="section-vertical">
						<AnimatedText_TitleBig text={"Lista de regalos"}/>
						<AnimatedText_Normal text={"También estaremos aceptando cualquier obsequio que compres desde:"}/>
						<AnimatedImage image={ThemeImages[theme].regalos} width={"100%"}/>
					</div>
				</CustomMarginBox>
			</div>
		</div>
	)
}

export const Portrait_Classic = ({
	showGate
}) => {
	return(
		<div className="intro">
			<div className="intro-bkg-left"/>
			<motion.div className="intro-bkg-left-b"
				animate={{
					opacity: [1,.7,1]
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "linear"
				}}
			/>

			<div className="intro-bkg-right"/>
			<motion.div className="intro-bkg-right-b"
				animate={{
					opacity: [1,.7,1]
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "linear"
				}}
			/>
			
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				animate={!showGate && { opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut" }}
			>
				Moises & Michel
			</motion.h1>
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				animate={!showGate && { opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut", delay: 2 }}
			>
				Te invitamos a nuestra boda!!!
			</motion.h2>
		</div>
	)
}

export const Portrait_Fantasy = ({
	showGate
}) => {
	return(
		<div className="intro">
			{/* Background*/}
			<div className="intro-bkg-center">
				<div style={{
					flex: "1 1 0",
					minHeight: 0,

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "50px 0 10px 0"
				}}>
					{/* Text */}
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={!showGate && { opacity: 1, y: 0 }}
						transition={{ duration: 2, ease: "easeOut" }}
						style={{
							margin: 0,
							textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)',
							fontSize: "clamp(2.5rem, 7vw, 7rem)"
						}}
					>
						NUESTRA BODA
					</motion.h1>
				</div>

				<div
					style={{
						flex: "0 1 auto",
						minHeight: 0,
						minWidth: 0,

						display: "flex",
						justifyContent: "center",
						alignItems: "center",

						overflow: "hidden",

						backgroundImage: `url(${PortraitBorder})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						alignContent: "center"
					}}
				>
					{/* Pokes */}
					<img src={PortraitPokemon} style={{
						display: "block",
						objectFit: "contain",
						maxHeight: "100%",
						maxWidth: "100%",
						width: "auto",
						height: "auto"
					}}/>
				</div>

				<div style={{
					flex: "1 1 0",
					minHeight: 0,

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "10px 0 50px 0"
				}}>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={!showGate && { opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut", delay: 2 }}
						style={{
							textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)',
							fontWeight: "580",
							fontSize: "clamp(3.5rem, 8vw, 8rem)",
							margin: 0
						}}
					>
						Moises & Michel
					</motion.h2>
				</div>
			</div>
		</div>
	)
}
import "./Particles.css";

import { useRef } from "react";

import { Petal } from "./ParticlesVectors";
import { Flower } from "./ParticlesVectors";

export const Petals = ({
	theme
}) => {
	const PetalColors = {
		fantasy: {
			gradient_a: "#f7feff",
			gradient_b: "#cbeaff",
			outline: "#80c1ff"
		},
		sakura: {
			gradient_a: "#fff1fa",
			gradient_b: "#ffc4e5",
			outline: "#ff9cd4"
		},
		paper: {
			gradient_a: "#fff",
			gradient_b: "#d1d1d1",
			outline: "#000"
		},
		night: {
			gradient_a: "#f7fbff",
			gradient_b: "#bed7ff",
			outline: "#97beff"
		}
	}

	const petalsRef = useRef(
		Array.from({ length: 40 },
			(_,i) => {
				const size = Math.random() * 40 + 20;
				const left = Math.pow(Math.random(), 0.8) * 100;
				
				const duration = 2 + ((size / 60) * 4);
				const delay = Math.random() * 4.0;
				const rotation = Math.random() * 360;
				
				const drift = Math.random() * 50 + 20;

				return{
					id: i,
					size,
					left,
					duration,
					delay,
					rotation,
					drift
				};
			}
		)
	);

	const petals = petalsRef.current;

	return(
		<div className = "Petals">
			{
				petals.map((petal) => {
					/*const hue = 300 + Math.random() * 40;
					const saturate = Math.random() * 10 + 90;
					const luminosity = Math.random() * 30 + 60;
					const color = `hsl(${hue}, ${saturate}%, ${luminosity}%)`;*/

					return(
						<div
							key={petal.id}
							className="petal"
							style = {{
								width: `${petal.size}px`,
								height: `${petal.size}px`,
								left: `${petal.left}%`,
								"--drift": `${petal.drift}px`,
								animationDuration: `${petal.duration}s`,
								animationDelay: `${petal.delay}s`,
								transform: `rotate(${petal.rotation}deg)`
							}}
						>
							<div className="petal-wave">
								<Petal 
									theme={theme}
									gradient_a={PetalColors[theme].gradient_a}
									gradient_b={PetalColors[theme].gradient_b}
									outline={PetalColors[theme].outline}
								/>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export const Flowers = ({
	theme
}) => {
	const FlowerColors = {
		fantasy: {
			gradient_a: "#bed7ff",
			gradient_b: "#f7fbff",
			outline: "#97beff",
			flower_in: "#fff",
			flower_out: "#afcfff",
			flower_out_outline: "#7db1ff",
			flower_center: "#bed7ff"
		},
		sakura: {
			gradient_a: "#ffc4e5",
			gradient_b: "#fff1fa",
			outline: "#ff9cd4",
			flower_in: "#fff",
			flower_out: "#ffa6cf",
			flower_out_outline: "#ff7eba",
			flower_center: "#fff"
		},
		paper: {
			gradient_a: "#c2c2c2",
			gradient_b: "#fff",
			outline: "#000",
			flower_in: "#fff",
			flower_out: "#d1d1d1",
			flower_out_outline: "#000000",
			flower_center: "#d4d4d4"
		},
		night: {
			gradient_a: "#bed7ff",
			gradient_b: "#f7fbff",
			outline: "#97beff",
			flower_in: "#fff",
			flower_out: "#afcfff",
			flower_out_outline: "#7db1ff",
			flower_center: "#bed7ff"
		}
	}

	const flowersRef = useRef(
		Array.from({ length: 20 },
			(_,i) => {
				const size = Math.random() * 60 + 100;
				const left = Math.pow(Math.random(), 0.8) * 100;

				const duration = 2 + ((size / 60) * 2);
				const delay = Math.random() * 4.0;
				const rotation = Math.random() * 360;
				
				const drift = Math.random() * 50 + 20;

				return{
					id: i,
					size,
					left,
					duration,
					delay,
					rotation,
					drift
				};
			}
		)
	);

	const flowers = flowersRef.current;

	return(
		<div className = "Flowers">
			{
				flowers.map((flower) => {
					return(
						<div
							key = {flower.id}
							className = "flower"
							style = {{
								width: `${flower.size}px`,
								height: `${flower.size}px`,
								left: `${flower.left}%`,
								"--drift": `${flower.drift}px`,
								animationDuration: `${flower.duration}s`,
								animationDelay: `${flower.delay}s`,
								transform: `rotate(${flower.rotation}deg)`
							}}
						>
							<Flower
								gradient_a={FlowerColors[theme].gradient_a}
								gradient_b={FlowerColors[theme].gradient_b}
								outline={FlowerColors[theme].outline}
								flower_in={FlowerColors[theme].flower_in}
								flower_out={FlowerColors[theme].flower_out}
								flower_out_outline={FlowerColors[theme].flower_out_outline}
								flower_center={FlowerColors[theme].flower_center}
							/>
						</div>
					)
				})
			}
		</div>
	);
}
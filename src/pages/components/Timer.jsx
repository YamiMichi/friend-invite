import { useEffect, useState } from "react";

import { AnimatedText_TitleBig } from "./Animated";

//.............................................................................
//Custom timer
export const Timer = ({
	targetDate
}) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(
		() => {
			const interval = setInterval(() => {
				const now = new Date();
				const diff = targetDate - now;

				if(diff <= 0){
					clearInterval(interval);
					return;
				}

				setTimeLeft({
					days: 		Math.floor(diff / (1000*60*60*24)),
					hours: 		Math.floor(diff / (1000*60*60))%24,
					minutes: 	Math.floor(diff / (1000*60))%60,
					seconds: 	Math.floor(diff / (1000))%60,
				});
			}, 1000);

			return () => clearInterval(interval);
		}, []
	);

	//const remain = {timeLeft.days}"d "{timeLeft.hours}"h "{timeLeft.minutes}"m "{timeLeft.seconds}"s";

	return(
		<div>
			<AnimatedText_TitleBig
				text={`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
			/>
		</div>
	)
}

//.............................................................................
//Date in UTC
export const DateUTC = ({}) => {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(
			() => {
				setNow(new Date());
			}, 1000
		);
	}, []);

	return(
		<div style={{color:"#FFFFFF"}}>
			{now.toLocaleString("es-MX", {
				timeZone: "UTC",
				timeZoneName: "short"
			})}
		</div>
	);
}

//.............................................................................
//Date in MX
export const DateMX = ({}) => {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(
			() => {
				setNow(new Date());
			}, 1000
		);
	}, []);

	return(
		<div style={{color:"#FFFFFF"}}>
			{now.toLocaleString("es-MX", {
				timeZone: "America/Mexico_City",
				timeZoneName: "short"
			})}
		</div>
	);
}
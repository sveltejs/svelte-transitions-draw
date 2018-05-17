import { cubicInOut } from 'eases-jsnext';

export default function draw(node, params) {
	const len = node.getTotalLength();

	return {
		delay: params.delay,
		duration: params.duration || 800,
		easing: params.easing || cubicInOut,
		css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
	};
}
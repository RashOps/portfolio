"use client";

import { track } from "@vercel/analytics/react";
import Link from "next/link";

export function TrackedExternalLink({
	href,
	eventName,
	children,
	className,
	target,
}) {
	return (
		<a
			href={href}
			target={target}
			className={className}
			onClick={() => {
				try {
					track(eventName);
				} catch (e) {}
			}}
		>
			{children}
		</a>
	);
}

export function TrackedInternalLink({
	href,
	eventName,
	eventData = {},
	children,
	className,
}) {
	return (
		<Link
			href={href}
			className={className}
			onClick={() => {
				try {
					track(eventName, eventData);
				} catch (e) {}
			}}
		>
			{children}
		</Link>
	);
}

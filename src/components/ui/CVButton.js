"use client";

import { useState } from "react";
import CVModal from "./CVModal";
import { track } from "@vercel/analytics/react";

export default function CVButton() {
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					try {
						track("cv_download");
					} catch (e) {}
					setIsCVOpen(true);
				}}
				className="glass text-on-surface font-headline font-medium px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all text-center cursor-pointer"
			>
				Consulter mon CV
			</button>
			<CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
		</>
	);
}

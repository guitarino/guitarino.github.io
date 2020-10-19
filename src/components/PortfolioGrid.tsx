import { h } from 'preact';
import "@styles/PortfolioGrid.scss";

type Asset = {
	type?: 'video' | 'image',
	src?: string,
	srcs?: string[],
	border?: boolean,
	width?: 'full' | 'half',
};

function getExtension(src: string) {
	return src.split('.').pop() || '';
}

export default function PortfolioGrid({ assets }: { assets: Asset[] }) {
	return <div class="PortfolioGrid">
		{assets.map(asset => (
			<div class={`PortfolioGrid__Item ${asset.width && asset.width === 'full' ? `PortfolioGrid__Item--full`: ``}`}>
				{
					asset.type && asset.type === 'video'
						? <video controls class={`PortfolioGrid__Asset ${asset.border === false ? `` : `PortfolioGrid__Asset--border`}`}>
							{(asset.srcs || [asset.src || '']).map(src => <source src={src} type={`video/${getExtension(src)}`} />)}
						</video>
						: <a rel="noopener noreferrer" target="_blank" href={asset.src}>
							<img class={`PortfolioGrid__Asset ${asset.border === false ? `` : `PortfolioGrid__Asset--border`}`} src={asset.src} />
						</a>
				}
			</div>
		))}
	</div>;
}
import { SvgAndroid, SvgIOS, SvgSwitch, SvgPlaystation, SvgWindows, SvgXbox } from "./Svgs";
import styles from "./PlatformsIcons.module.css";

function connectIcon(name) {
    switch(name) {
        case "nintendo":
            return <SvgSwitch key="nintendo"/>
        case "android":
            return <SvgAndroid key="android"/>
        case "pc":
            return <SvgWindows key="pc"/>
        case "ios":
            return <SvgIOS key="ios"/>
        case "playstation":
            return <SvgPlaystation key="playstation"/>
        case "xbox":
            return <SvgXbox key="xbox"/>
    }
}

export default function PlatformsIcons({ game }) {

    return <div className={styles.icons}>
        {game.parent_platforms.map(({ platform }) => connectIcon(platform.slug))}
    </div>
}
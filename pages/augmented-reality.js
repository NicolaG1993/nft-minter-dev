import styles from "../styles/Item.module.css";
import YouTube from "react-youtube";

export default function AugmentedReality() {
    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const style = {
        height: "100%",
        width: "100%",
    };

    const onReady = (e) => {
        e.target.pauseVideo();
    };

    return (
        <div id={styles["AugmentedReality"]}>
            <section style={{ marginTop: "60px" }}>
                <div style={{ height: "95vh", width: "100%" }}>
                    <YouTube
                        videoId="hhVo6uy-Uhw"
                        opts={opts}
                        style={style}
                        // onReady={(e) => onReady(e)}
                    />
                </div>
            </section>
        </div>
    );
}

import React from 'react';

type typeProps = {
    handleClickToTop: () => void;
}

const WithScrollToTop = (duration: number) => {
    return (Component: React.ComponentType<typeProps>) => {
        // eslint-disable-next-line react/display-name
        return (props: any) => {
            const scrollToTop = () => {
                const $scrollingElement: Element | null = document.scrollingElement;

                if ($scrollingElement!.scrollTop === 0) return;
                const cosParameter: number = $scrollingElement!.scrollTop / 2;
                let scrollCount: number = 0, oldTimestamp: number | null = null;

                const step = (newTimestamp: number) => {
                    if (oldTimestamp !== null) {
                        scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
                        if (scrollCount >= Math.PI) return $scrollingElement!.scrollTop = 0;
                        $scrollingElement!.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
                    }
                    oldTimestamp = newTimestamp;
                    window.requestAnimationFrame(step);
                }

                window.requestAnimationFrame(step);
            }
            return <Component handleClickToTop={scrollToTop} {...props}/>
        }
    }
}

export default WithScrollToTop;

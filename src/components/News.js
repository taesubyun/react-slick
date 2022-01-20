import { Carousel } from 'react-responsive-carousel';

const SimpleSlider = () => {
    superConsoleLog('something');

    return (
        <div>
            <h2> Single Item</h2>
            <Carousel>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default SimpleSlider;

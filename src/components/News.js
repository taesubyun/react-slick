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

// https://github.com/leandrowd/react-responsive-carousel / https://www.npmjs.com/package/react-responsive-carousel
// git clone
// https://www.npmjs.com/package/react-responsive-carousel
// npm install react-responsive-carousel
// node_modules/
//   /react-responsive-carousel :
//     /index.js [export A, B, C]
//
// import { A, B, C } from 'react-responsive-carousel';
// *믹서기*.. 믹서기 안에 넣고 돌린다.
// 통:
// 돌림

// create-react-app
// npm ~~~~~~~~~~~~~~

// import useState from 'react'
//

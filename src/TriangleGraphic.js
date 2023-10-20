import { useEffect, useState} from 'react';
import { Stage, Layer, Line } from "react-konva";
import { circle, point } from '@flatten-js/core';

const TriangleGraphic = ({lengths}) => {
    const width = 210;
    const height = 210;
    const scale = 200;

    const scalePoints = (points, scale) => {
        points.forEach((point) => {
            point.x *= scale;
            point.y *= scale;
        })
    }

    const translatePoints = (points, xShift, yShift) => {
        points.forEach((point) => {
            point.x += xShift;
            point.y += yShift;
        })
    }

    const generateTriangle = () => {
        lengths.sort((a, b) => a - b);

        const p1 = point(0, 0);
        const p2 = point(lengths[0], 0);

        // Calculate third point from intersection
        const circle1 = circle(p1, lengths[1])
        const circle2 = circle(p2, lengths[2])
        const ip = circle1.intersect(circle2);

        // If we have an invalid triangle, return a dummy triangle that won't be shown.
        if(ip.length === 0) {
            return {
                width: 200,
                height: 150,
                points: [0, 0, 0, 200, 1, 150]
            }
        }

        const p3 = point(ip[0].x, Math.abs(ip[0].y));

        const points = [p1, p2, p3];

        //Shift X so all values are positive
        if(p3.x < 0) {
            const shift = Math.abs(p3.x);
            translatePoints(points, shift, 0);
        }

        // Scale to fit
        const width = Math.max(p2.x, p3.x);
        const maxDimension = Math.max(width, p3.y);
        const fitRatio = scale / maxDimension;
        scalePoints(points, fitRatio);

        return {
            width: width * fitRatio,
            height: p3.y,
            points:[p1.x, p1.y, p2.x, p2.y, p3.x, -p3.y]
        };
    }

    const [triangle, setTriangle] = useState(generateTriangle(lengths));
    useEffect(() => {setTriangle(generateTriangle(lengths))}, [lengths]);

    const containerStyle = {
        width: `${width}px`,
        height: `${height}px`
    }

    return (
        <>
        <div className="mx-auto" style={containerStyle}>
            <Stage width={width} height={height}>
                <Layer>
                    <Line
                        x={(width - triangle.width) / 2}
                        y={height - ((height - triangle.height) / 2)}
                        points={triangle.points}
                        closed
                        stroke="black"
                    />
                </Layer>
            </Stage>
        </div>
        </>
    );
}
export default TriangleGraphic;
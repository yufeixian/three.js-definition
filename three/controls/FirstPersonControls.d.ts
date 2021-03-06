///<reference path="../three.d.ts"/>

declare module THREE {

    export class FirstPersonControls {

        constructor(object: Camera, domElement: HTMLElement | Document);

        object: Object3D;
        target: Vector3;
        domElement: HTMLElement | Document;
        enabled: boolean;
        movementSpeed: number;
        lookSpeed: number;
        lookVertical: boolean;
        autoForward: boolean;
        activeLook: boolean;
        heightSpeed: boolean;
        heightCoef: number;
        heightMin: number;
        heightMax: number;
        constrainVertical: boolean;
        verticalMin: number;
        verticalMax: number;
        autoSpeedFactor: number;
        mouseX: number;
        mouseY: number;
        lat: number;
        lon: number;
        phi: number;
        theta: number;
        moveForward: boolean;
        moveBackward: boolean;
        moveLeft: boolean;
        moveRight: boolean;
        mouseDragOn: boolean;
        viewHalfX: number;
        viewHalfY: number;

        handleResize: VoidFunction;
        onMouseDown(event: MouseEvent): void;
        onMouseUp(event: MouseEvent): void;
        onMouseMove(event: MouseEvent): void;
        onKeyDown(event: KeyboardEvent): void;
        onKeyUp(event: KeyboardEvent): void;
        update(delta: number): void;
        dispose: VoidFunction;

    }

}

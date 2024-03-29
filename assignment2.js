import {defs, tiny} from './examples/common.js';

const {
    Vector, Vector3, vec, vec3, vec4, color, hex_color, Matrix, Mat4, Light, Shape, Material, Scene,
} = tiny;

class Cube extends Shape {
    constructor() {
        super("position", "normal",);
        // Loop 3 times (for each axis), and inside loop twice (for opposing cube sides):
        this.arrays.position = Vector3.cast(
            [-1, -1, -1], [1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, -1], [-1, 1, -1], [1, 1, 1], [-1, 1, 1],
            [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, 1], [1, -1, -1], [1, 1, 1], [1, 1, -1],
            [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, -1], [-1, -1, -1], [1, 1, -1], [-1, 1, -1]);
        this.arrays.normal = Vector3.cast(
            [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0],
            [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0],
            [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, -1], [0, 0, -1], [0, 0, -1], [0, 0, -1]);
        // Arrange the vertices into a square shape in texture space too:
        this.indices.push(0, 1, 2, 1, 3, 2, 4, 5, 6, 5, 7, 6, 8, 9, 10, 9, 11, 10, 12, 13,
            14, 13, 15, 14, 16, 17, 18, 17, 19, 18, 20, 21, 22, 21, 23, 22);
    }
}

class Cube_Outline extends Shape {
    constructor() {
        super("position", "color");
        //  TODO (Requirement 5).
        // When a set of lines is used in graphics, you should think of the list entries as
        // broken down into pairs; each pair of vertices will be drawn as a line segment.
        // Note: since the outline is rendered with Basic_shader, you need to redefine the position and color of each vertex

        /*this.arrays.position = Vector3.cast(
            [-1, -1, -1], [1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, -1], [-1, 1, -1], [1, 1, 1], [-1, 1, 1],
            [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, 1], [1, -1, -1], [1, 1, 1], [1, 1, -1],
            [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, -1], [-1, -1, -1], [1, 1, -1], [-1, 1, -1]);
          this.arrays.color = Vector3.cast(
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1), vec4(1, 1, 1, 1));
         */

        // [-1,-1,-1],[1,-1,1] do not include
        /*
        this.arrays.position = Vector3.cast(
            [-1, -1, -1],[1, -1, -1],
            [-1,-1,-1], [-1, -1, 1],
            [1,-1,1],[1,-1,-1],
            [-1,-1,1], [1,-1,1]);

        this.arrays.color = Vector3.cast(
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1,1,1,1), vec4(1,1,1,1));
         */

        this.arrays.position = Vector3.cast(
            [-1, 1, -1],[1, 1, -1], //back left top to back right top
            [-1,1,-1], [-1, 1, 1],   //back left top to front left top
            [1,1,1],[1,1,-1],   //front right top to  back right top
            [-1,1,1], [1,1,1], //front right top to  back right top
            [-1, -1, -1],[1, -1, -1],  //back left bottom to back right bottom
            [-1,-1,-1], [-1, -1, 1],  //back left bottom to front left bottom
            [1,-1,1],[1,-1,-1], //front right bottom to  back right bottom
            [-1,-1,1], [1,-1,1], //front right bottom to  back right bottom
            [-1,-1,-1], [-1,1,-1],
            [1,-1,-1], [1,1,-1],
            [-1,-1,1], [-1,1,1],
            [1,-1,1], [1,1,1]);

        this.arrays.color = Vector3.cast(
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1,1,1,1), vec4(1,1,1,1),
            vec4(1, 1, 1, 1), vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1, 1, 1, 1),vec4(1, 1, 1, 1),
            vec4(1,1,1,1), vec4(1,1,1,1),
            vec4(1,1,1,1), vec4(1,1,1,1),
            vec4(1,1,1,1), vec4(1,1,1,1),
            vec4(1,1,1,1), vec4(1,1,1,1),
            vec4(1,1,1,1), vec4(1,1,1,1));
        this.indices = false;
    }
}

class Cube_Single_Strip extends Shape {
    constructor() {
        super("position", "normal");

        this.arrays.position = Vector3.cast(
            [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1], [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1]
        );

        // Set normals equal to positions
        this.arrays.normal = Vector3.cast(
            [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1], [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1]
        );
        //why do these indices work?
        //zthis.indices.push(0,1,3,2,0,2,6,4,0,1,5,4,0,1,3,7,5,1)
        this.indices.push(0,1,3,2,0,2,6,4,0,1,5,4,0,1,3,7,5,1,0,4,6,7,5,4,0,2,3,7,6,2)
        //this.indices.push( 4,0, 2,1,3,7,5,1,7,3,2);
    }
}

class Pyramid extends Shape {
    constructor() {
        super("position", "normal");
        this.arrays.position = Vector3.cast(
            [1, 0, 0], [0, 0, -1], [-1, 0, 0], [0, 0, 1], [0, 2, 0]
        );
        this.arrays.normal = Vector3.cast(
            [1, 0, 0], [0, 0, -1], [-1, 0, 0], [0, 0, 1], [0, 1, 0]
        );
        this.indices.push(0, 1, 4, 2, 3, 1, 0, 4, 3);
    }
}
class Base_Scene extends Scene {
    /**
     *  **Base_scene** is a Scene that can be added to any display canvas.
     *  Setup the shapes, materials, camera, and lighting here.
     */

    constructor() {
        // constructor(): Scenes begin by populating initial values like the Shapes and Materials they'll need.
        super();
        this.hover = this.swarm = false;
        // At the beginning of our program, load one of each of these shape definitions onto the GPU.
        this.shapes = {
            'cube': new Cube(),
            'outline': new Cube_Outline(),
            'strip' : new Cube_Single_Strip(),
            'pyramid': new Pyramid()
        };

        // *** Materials
        this.materials = {
            plastic: new Material(new defs.Phong_Shader(),
                {ambient: .4, diffusivity: .6, color: hex_color("#ffffff")}),
        };
        // The white material and basic shader are used for drawing the outline.
        this.white = new Material(new defs.Basic_Shader());
    }

    display(context, program_state) {
        // display():  Called once per frame of animation. Here, the base class's display only does
        // some initial setup.

        // Setup -- This part sets up the scene's overall camera matrix, projection matrix, and lights:
        if (!context.scratchpad.controls) {
            this.children.push(context.scratchpad.controls = new defs.Movement_Controls());
            // Define the global camera and projection matrices, which are stored in program_state.
            program_state.set_camera(Mat4.translation(5, -10, -30));
        }
        program_state.projection_transform = Mat4.perspective(
            Math.PI / 4, context.width / context.height, 1, 100);

        // *** Lights: *** Values of vector or point lights.
        const light_position = vec4(0, 5, 5, 1);
        program_state.lights = [new Light(light_position, color(1, 1, 1, 1), 1000)];
    }
}

export class Assignment2 extends Base_Scene {
    /**
     * This Scene object can be added to any display canvas.
     * We isolate that code so it can be experimented with on its own.
     * This gives you a very small code sandbox for editing a simple scene, and for
a     */


    constructor() {
        super();
        this.colors = [];
        this.colors.length = 8;
        this.set_colors();
        this.sitStill = false;
        this.outlined = false;
    }

    set_colors() {
        // TODO:  Create a class member variable to store your cube's colors.
        for (let i = 0; i < this.colors.length; i++) {
            let a = ("00" + (Math.random() * 255).toString(16)).slice(-2);
            let b = ("00" + (Math.random() * 255).toString(16)).slice(-2);
            let c = ("00" + (Math.random() * 255).toString(16)).slice(-2);
            // Update color in the array
            this.colors[i] = hex_color("#" + a + b + c);
        }
    }
        // Hint:  You might need to create a member variable at somewhere to store the colors, using `this`.
        // Hint2: You can consider add a constructor for class Assignment2, or add member variables in Base_Scene's constructor.

    make_control_panel() {
        // Draw the scene's buttons, setup their actions and keyboard shortcuts, and monitor live measurements.
        this.key_triggered_button("Change Colors", ["c"],this.set_colors);
        // Add a button for controlling the scene.
        this.key_triggered_button("Outline", ["o"], () => {
            // TODO:  Requirement 5b:  Set a flag here that will toggle your outline on and off
            this.outlined = !this.outlined;
        });
        this.key_triggered_button("Sit still", ["m"], () => {
            // TODO:  Requirement 3d:  Set a flag here that will toggle your swaying motion on and off.
            this.sitStill = !this.sitStill;
        });
    }

    draw_box(context, program_state, model_transform) {
        // TODO:  Helper function for requirement 3 (see hint).
        //        This should make changes to the model_transform matrix, draw the next box, and return the newest model_transform.
        // Hint:  You can add more parameters for this function, like the desired color, index of the box, etc.

        return model_transform;
    }

    display(context, program_state) {
        super.display(context, program_state);
        let model_transform = Mat4.identity();



        if(this.outlined){
            this.shapes.outline.draw(context, program_state, model_transform, this.white, "LINES");
        }
        else{
            this.shapes.cube.draw(context, program_state, model_transform, this.materials.plastic.override({color:this.colors[0]}));
        }



        /*
        let tr1 = Mat4.translation(1,1,0)
        let rt1 = Mat4.rotation(-45, 0, 0,1)
        let tr2 = Mat4.translation(-1, -1, 0)
        let tr3 = Mat4.translation(0,2,0)
        let practice_transformation = tr3.times((tr2.times(rt1.times(tr1))));
         */
        /*
        let tr1 = Mat4.translation(1, 1, 0);  // Translate by (1, 1)
        let rt1 = Mat4.rotation(0.05 * Math.PI, 0, 0, 1); // Rotate
        let tr2 = Mat4.translation(-1, -1, 0); // Inverse-translate by (-1, -1)
        let tr3 = Mat4. translation(0,2,0)
        let practice_transformation = tr3.times(tr2.times(rt1).times(tr1))
        Combine the transformation
        this.shapes.cube.draw(context,program_state,practice_transformation, this.materials.plastic.override({color:red}));

        let count = 2;
        for (let i = 0; i < 8; i++) {
            let transformation = Mat4.translation(0, count, 0)
            this.shapes.cube.draw(context, program_state, transformation.times(practice_transformation), this.materials.plastic.override({color: blue}));
            count += 2;
            console.log("square");
        }


         */


        let hinge_transformation = Mat4.identity();

        let t = program_state.animation_time / 1000.0; // ms -> s



// Number of boxes
        let num_boxes = 8;
        let angular_frequency = 2 * Math.PI / 3 * t;
        let angle = (0.05 * Math.PI)/2  + ((0.05*Math.PI)/2)*Math.sin(angular_frequency);
        if(this.sitStill){
            angle = 0.05*Math.PI;
        }
        //let angle =   0.05 * Math.PI * (0.5 * Math.sin(angular_frequency) + 0.5 * Math.abs(Math.sin(angular_frequency)));

        for (let i = 0; i < num_boxes-1; i++) {
            // Transformation for each box
            let tr1 = Mat4.translation(1, 1, 0);      // Translate by (1, 1)
            let rt1 = Mat4.rotation(angle, 0, 0, 1);  // Rotate
            let tr2 = Mat4.translation(-1, -1, 0);    // Inverse-translate by (-1, -1)
            let tr3 = Mat4.translation(0,2, 0);  // Incremental translation for stacking
0

            // Combine the transformations hierarchically
            let box_transformation = hinge_transformation.times(tr3.times(tr2.times(rt1.times(tr1))));
            if(this.outlined){
                this.shapes.outline.draw(context, program_state, box_transformation, this.white, "LINES");
            }
            else{
                if(i % 2 === 0){
                    this.shapes.strip.draw(context, program_state, box_transformation, this.materials.plastic.override({color: this.colors[i+1]}), "TRIANGLE_STRIP");
                }
                this.shapes.cube.draw(context, program_state, box_transformation, this.materials.plastic.override({color: this.colors[i+1]}));
            }
            // Update the hinge transformation for the next iteration
            hinge_transformation = box_transformation;
        }

        // TODO:  Draw your entire scene here.  Use this.draw_box( graphics_state, model_transform ) to call your helper.
    }
}
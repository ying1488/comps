import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = <Modal
        onClose={handleClose}
        actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            {/* decides if this will be shown or not */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sed ex posuere tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In cursus gravida sem ac viverra. Praesent suscipit porttitor gravida. Pellentesque vitae arcu sit amet sem scelerisque ornare egestas id dui. Suspendisse vehicula lacinia porta. Sed pellentesque ligula eget neque feugiat fringilla. Pellentesque placerat vestibulum faucibus. Integer aliquam pharetra libero ac commodo. Sed augue tortor, consequat quis tortor vel, luctus feugiat orci. Nam sollicitudin et dolor vitae fringilla. Ut vel feugiat turpis. Sed nec hendrerit tortor. Pellentesque at felis eleifend, lobortis leo ut, pellentesque enim. Etiam aliquam consectetur purus eget blandit.
            </p>

        </div>
    );
}

export default ModalPage;
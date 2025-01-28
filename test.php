<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Follower</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            height: 100vh;
            background-color: #1e1e2f;
            overflow: hidden;
        }
        .hammer {
            position: absolute;
            pointer-events: none; /* Prevent interfering with clicks */
            transform: translate(-50%, -50%); /* Center image at the cursor */
        }
    </style>
</head>
<body>
    <!-- Image to follow the mouse -->
    <img src="./images/hammer.png" alt="Hammer" id="hammer" class="hammer w-16">

    <script>
        // Get the hammer image element
        const hammer = document.getElementById('hammer');

        // Add a mousemove event listener to the document
        document.addEventListener('mousemove', (event) => {
            // Update the position of the hammer image to follow the cursor
            hammer.style.left = `${event.clientX}px`; // Horizontal position
            hammer.style.top = `${event.clientY}px`;  // Vertical position
        });
    </script>
</body>
</html>

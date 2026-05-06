        // Animate floating shapes
        floatingShapes.forEach((shape, index) => {
            if (shape.userData) {
                shape.position.x = shape.userData.initialX + Math.sin(elapsedTime * shape.userData.speedX) * 1.5;
                shape.position.y = shape.userData.initialY + Math.cos(elapsedTime * shape.userData.speedY) * 1.2;
                shape.position.z = shape.userData.initialZ + Math.sin(elapsedTime * shape.userData.speedZ) * 1;
                shape.rotation.x = elapsedTime * 0.5;
                shape.rotation.y = elapsedTime * 0.3;
            } else {
                // For shapes without userData (icoShape, cylinder)
                shape.rotation.x = elapsedTime * 0.3;
                shape.rotation.y = elapsedTime * 0.4;
                shape.rotation.z = elapsedTime * 0.2;
            }
        });
        
        // Animate moving light
        movingLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
        movingLight.position.z = Math.cos(elapsedTime * 0.3) * 6;
        movingLight.position.y = Math.sin(elapsedTime * 0.7) * 3;
        
        // Gentle camera movement
        camera.position.x = Math.sin(elapsedTime * 0.1) * 1;
        camera.position.y = Math.cos(elapsedTime * 0.15) * 0.5;
        camera.lookAt(0, 0, 0);
        
        // Pulse light intensities
        const pulse = Math.sin(elapsedTime * 2) * 0.2 + 0.5;
        blueLight.intensity = 0.4 + Math.sin(elapsedTime * 1.5) * 0.2;
        purpleLight.intensity = 0.4 + Math.cos(elapsedTime * 1.8) * 0.2;
        greenLight.intensity = 0.3 + Math.sin(elapsedTime * 2.2) * 0.15;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DBackground);
} else {
    init3DBackground();
}

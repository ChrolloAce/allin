#!/bin/bash

# Create directories
mkdir -p public/images
mkdir -p public/textures
mkdir -p public/icons

# Function to create placeholder SVG
create_placeholder() {
    local filename=$1
    local text=$2
    local color=${3:-"#67C7E6"}
    
    cat > "public/images/$filename" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="$color" opacity="0.1"/>
  <rect x="50" y="50" width="700" height="500" fill="none" stroke="$color" stroke-width="2" stroke-dasharray="10,5" opacity="0.3"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="28" fill="$color" text-anchor="middle" dy=".3em">$text</text>
</svg>
EOF
    echo "Created: public/images/$filename"
}

# Create service images
create_placeholder "house-1.svg" "House Wash 1" "#67C7E6"
create_placeholder "house-2.svg" "House Wash 2" "#67C7E6"
create_placeholder "house-3.svg" "House Wash 3" "#67C7E6"
create_placeholder "roof-1.svg" "Roof Wash 1" "#2B99B7"
create_placeholder "roof-2.svg" "Roof Wash 2" "#2B99B7"
create_placeholder "roof-3.svg" "Roof Wash 3" "#2B99B7"
create_placeholder "concrete-1.svg" "Concrete Cleaning 1" "#999999"
create_placeholder "concrete-2.svg" "Concrete Cleaning 2" "#999999"
create_placeholder "concrete-3.svg" "Concrete Cleaning 3" "#999999"
create_placeholder "gutter-1.svg" "Gutter Cleaning 1" "#4A90E2"
create_placeholder "gutter-2.svg" "Gutter Cleaning 2" "#4A90E2"
create_placeholder "gutter-3.svg" "Gutter Cleaning 3" "#4A90E2"
create_placeholder "commercial-1.svg" "Commercial Services 1" "#333333"
create_placeholder "commercial-2.svg" "Commercial Services 2" "#333333"
create_placeholder "commercial-3.svg" "Commercial Services 3" "#333333"

# Create before/after images
create_placeholder "house-before.svg" "House - Before" "#999999"
create_placeholder "house-after.svg" "House - After" "#67C7E6"
create_placeholder "roof-before.svg" "Roof - Before" "#666666"
create_placeholder "roof-after.svg" "Roof - After" "#2B99B7"
create_placeholder "concrete-before.svg" "Concrete - Before" "#666666"
create_placeholder "concrete-after.svg" "Concrete - After" "#999999"

# Create other images
create_placeholder "truck.svg" "Company Truck" "#67C7E6"

# Create video thumbnails
create_placeholder "video-thumb-house.svg" "House Washing Video" "#67C7E6"
create_placeholder "video-thumb-roof.svg" "Roof Cleaning Video" "#2B99B7"
create_placeholder "video-thumb-concrete.svg" "Concrete Cleaning Video" "#999999"
create_placeholder "video-thumb-commercial.svg" "Commercial Video" "#333333"

echo "All placeholder images created successfully!"

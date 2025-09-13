#!/bin/bash

# Create placeholder images for all location pages
cd public/images/locations

# List of location image files needed
locations=(
  "wpb-plumbing.jpg"
  "palm-beach-plumbing.jpg"
  "pbg-plumbing.jpg"
  "npb-plumbing.jpg"
  "riviera-plumbing.jpg"
  "boynton-plumbing.jpg"
  "delray-plumbing.jpg"
  "boca-plumbing.jpg"
  "lantana-plumbing.jpg"
  "wellington-plumbing.jpg"
  "rpb-plumbing.jpg"
  "jupiter-plumbing.jpg"
  "lake-worth-plumbing.jpg"
  "greenacres-plumbing.jpg"
  "palm-springs-plumbing.jpg"
  "pompano-plumbing.jpg"
  "deerfield-plumbing.jpg"
  "pbc-plumbing.jpg"
  "broward-plumbing.jpg"
)

# Use an existing plumber image as the base for all locations
base_image="../../hero-plumber.jpeg"

# Check if base image exists
if [ -f "$base_image" ]; then
  echo "Using $base_image as template for location images..."
  for location in "${locations[@]}"; do
    if [ ! -f "$location" ]; then
      cp "$base_image" "$location"
      echo "Created $location"
    else
      echo "$location already exists, skipping..."
    fi
  done
else
  echo "Base image not found, creating simple placeholders..."
  for location in "${locations[@]}"; do
    if [ ! -f "$location" ]; then
      # Create a simple placeholder file
      echo "placeholder" > "$location"
      echo "Created placeholder $location"
    fi
  done
fi

echo "Location images setup complete!"

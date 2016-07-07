TODO:
Make instances of collage riot observables
Add add imageitem riot function which adds the image id to ths class
Cleanup class
Work on member functions for image manipulate before final collage export to base64 image

Member functions:
  createCanvases() (creates the initial number of canvases)
  addImage() (adds image to collage based on cell and image item id)
  changeXOffset() (moves the image along the x-axis)
  zoom() (changes rszh param in image server url)
  addCell() - adds one cell (cannot be over 4)
  removeCell() - removes one cell (cannot be less than 2)
  exportImage() - returns base64 final image from final canvas

Instance Variables:
  cells - number of cells in the collage
  finalCanvasWidth - final width of desired image
  finalCanvasHeight - final height of desired image
  imageData = array of cell objects

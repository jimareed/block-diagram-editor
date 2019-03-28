# Block Diagram Editor

Hobby project to learn react.  A block diagram editor that lets you add blocks and join them with arrows.  Click on the canvas to add a block.  Click on the block to delete it.  Use arrows to connect the blocks.  Still under development (haven't added arrow tips yet).

<p  align="center">
    <img src="./images/block-diagram-editor.png" alt="Block Diagram Editor" width="50%" height="50%"/>
</p>


Initial setup
```
npm install
```

Run
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Docker build
```
docker build --tag block-diagram-editor-image .
docker run --name block-diagram-editor -p 5000:5000 -d block-diagram-editor-image
```

Docker cleanup
```
docker stop block-diagram-editor
docker rm block-diagram-editor
docker rmi block-diagram-editor-image
```

Production Build
```
  npm run build
  npm install -g serve
  serve -s build
```

const pageElement = document.querySelector('h1')

document.querySelectorAll('.icon-container').forEach(function (container) {
  container.addEventListener('click', function (event) {
    pageElement.textContent = event.currentTarget.querySelector('p').textContent
  })
})


//TODO - load the remaining paths from SVGs
var shapesToPaths = {
  "INCOMING_ROUTE": "M14.6,16.5c2.1,0,3.7-1.7,3.7-3.7c0-2.1-1.7-3.7-3.7-3.7s-3.7,1.7-3.7,3.7C10.9,14.9,12.5,16.5,14.6,16.5",
  "COMPARE_DATA": "M13.6,0C13.6,0,0,0,0,13.6v55c0,0,0,13.6,13.6,13.6h66.3c0,0,13.6,0,13.6-13.6v-55c0,0,0-13.6-13.6-13.6H13.6",
  "SEND_CHAT_MESSAGE": "M13.6,0C13.6,0,0,0,0,13.6v55c0,0,0,13.6,13.6,13.6h66.3c0,0,13.6,0,13.6-13.6v-55c0,0,0-13.6-13.6-13.6H13.6"
}

//TODO - add remaining nodes
var nodes = [{
  id: "1",
  content: {
    text: "Incoming Route"
  },
  path: shapesToPaths["INCOMING_ROUTE"]
}, {
  id: "2",
  content: {
    text: "Compare Data"
  },
  path: shapesToPaths["COMPARE_DATA"]
}, {
  id: "3",
  content: {
    text: "Send Chat Message"
  },
  path: shapesToPaths["SEND_CHAT_MESSAGE"]
}];

//TODO - add remaining edges
var edges = 
[{
  from: "1",
  to: "2"
},
{
  from: "2",
  to: "3"
}]

$("#diagram").kendoDiagram({
  layout: "tree",
  shapes: nodes,
  connections: edges,
  connectionDefaults: {
    endCap: "ArrowEnd"
  }
});


// 360 indoor viewer
    pannellum.viewer('panorama', {
      default: {
        firstScene: 'circle',
        author: 'Fouriesburg Tourism',
        sceneFadeDuration: 1000,
        autoLoad: true
      },
      scenes: {
        circle: {
          title: 'Indoor Area',
          hfov: 110,
          pitch: -3,
          yaw: 117,
          type: 'equirectangular',
          preview: 'assets/images/fsb7.jpg',
          panorama: 'assets/images/estate/1.jpg',
          hotSpots: [
            {
              pitch: -2.1,
              yaw: 212.9,
              type: 'scene',
              text: 'Move to next area',
              sceneId: 'house'
            }
          ]
        },
        house: {
          title: 'Connected Area',
          hfov: 110,
          yaw: 5,
          type: 'equirectangular',
          panorama: 'assets/images/estate/3.jpg',
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 137.1,
              type: 'scene',
              text: 'Return to start',
              sceneId: 'room',
              targetYaw: -23,
              targetPitch: 2
            }
          ]
        },
        room: {
          title: 'Another Area',
          hfov: 110,
          yaw: 5,
          type: 'equirectangular',
          panorama: 'assets/images/estate/4.jpg',
          hotSpots: [
  

{
    pitch:-0.6,
    yaw:17.1,
    cssClass:'custom-hotspot',
    createTooltipFunc:function(hotSpotDiv){

        hotSpotDiv.innerHTML = `
            <div class="bg-primary rounded-circle"
                 style="
                 width:30px;
                 height:30px;
                 cursor:pointer;
                 border:3px solid white;
                 box-shadow:0 0 15px rgba(0,0,0,.4);
                 ">
            </div>
        `;

        hotSpotDiv.onclick = function(){

            showHotspotModal({
                title:"Fouriesburg Viewpoint",
                location:"Fouriesburg, Free State",
                image:"assets/images/fsb7.jpg",
                description:"Experience breathtaking panoramic views of the Maluti Mountains and surrounding countryside.",
                category:"Scenic Attraction",
                hours:"08:00 - 18:00",
                price:"Free Entry",
                directions:"https://maps.google.com",
                website:"https://example.com",
                booking:"#"
            });

        };

    }
},{
              pitch: -0.6,
              yaw: 137.1,
              type: 'scene',
              text: 'Back to first area',
              sceneId: 'circle',
              targetYaw: -23,
              targetPitch: 2
            }
          ]
        }
      }
    });
    
    
    
    
    
   
    // 360 product viewer
    (function () {
      const path = './assets/images/car1/';
      if (typeof pdt360DegViewer === 'function') {
        pdt360DegViewer('car3', 51, path, 'png', false, false, true, false, false, false, false);
      }
    })();
    
    


    // 360 video viewers
    (function (window, videojs) {
      const player = window.player = videojs('video');
      player.mediainfo = player.mediainfo || {};
      player.mediainfo.projection = '360';
      window.vr = player.vr({ projection: 'AUTO', debug: false, forceCardboard: false });
    }(window, window.videojs));
    
    
    function showHotspotModal(data){

    document.getElementById("galleryModalLabel").textContent = data.title;
    document.getElementById("modalLocation").textContent = data.location;
    document.getElementById("modalText").textContent = data.description;

    document.getElementById("modalCategory").textContent = data.category;
    document.getElementById("modalHours").textContent = data.hours;
    document.getElementById("modalPrice").textContent = data.price;

    document.getElementById("modalImage").src = data.image;

    document.getElementById("modalDirections").href = data.directions;
    document.getElementById("modalWebsite").href = data.website;
    document.getElementById("modalBooking").href = data.booking;

    const modal =
        new bootstrap.Modal(
            document.getElementById('galleryModal')
        );

    modal.show();
}

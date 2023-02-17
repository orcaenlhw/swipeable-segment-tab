import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Swiper, Zoom } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { IonicSwiper, IonSegment } from '@ionic/angular';
SwiperCore.use([IonicSwiper, Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {

  @ViewChild("swiper") swiper: SwiperComponent;
  @ViewChild('mysegment') segComponent: IonSegment;
  private segmentList: Array<string> = ['0', '1'];
  type: any;
  private slides: Swiper;
  catParag = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque urna magna, quis accumsan mauris venenatis vel. Nunc vulputate, libero at sagittis consequat, ex erat varius turpis, at laoreet diam magna luctus nisl. Aenean at ante quis mauris sodales ultrices et eget dui. Sed ac tellus aliquet, rutrum augue vel, dignissim arcu. Nulla sem orci, interdum sit amet libero eu, tincidunt dictum tellus. Mauris vitae tempor orci. In hac habitasse platea dictumst. Nullam nec dignissim diam. Duis urna urna, accumsan porttitor venenatis vitae, congue nec justo.';

  dogParag = 'Aenean efficitur dictum molestie. Aenean urna orci, convallis sed scelerisque auctor, placerat a mauris. Pellentesque molestie mi magna, et blandit diam elementum vitae. Maecenas odio erat, pellentesque in laoreet eu, dignissim quis nulla. Nullam felis erat, tempus ac neque dapibus, dictum congue urna. Ut suscipit luctus ornare. Sed fermentum finibus magna, ac posuere augue rutrum in. Integer eu ipsum eu felis fringilla luctus. Morbi turpis sapien, finibus ut lorem et, lacinia pellentesque nunc. Nulla lacinia non lorem sit amet volutpat. Aliquam malesuada tristique efficitur. Aenean imperdiet congue lectus, non pretium nisi vulputate eu. Sed lacus urna, sagittis quis augue vel, volutpat elementum odio. Sed orci leo, posuere eget dictum mollis, lobortis et est. Aenean egestas mollis libero, vestibulum pellentesque nisi malesuada lacinia. Maecenas fermentum ut augue at efficitur. Nunc purus velit, imperdiet nec vestibulum sed, viverra dignissim tortor. Nam efficitur quam non urna ornare mattis. Nulla non turpis ac turpis lacinia venenatis. Aenean consequat libero quis metus volutpat congue eu at orci. Maecenas eu odio id turpis vulputate cursus. Suspendisse potenti. Duis tincidunt lectus mattis libero lobortis, non tempus massa bibendum. Pellentesque sagittis sem vitae ante vulputate, eget egestas arcu tincidunt. Maecenas scelerisque sagittis felis, lobortis vulputate risus posuere in. Etiam tempor imperdiet risus, a sollicitudin ex scelerisque eu. Nam non ante id lorem pulvinar consequat in commodo ligula. Donec tristique magna quis vulputate ornare. Cras pulvinar porttitor sapien et euismod. Fusce bibendum ultricies lacus, eget commodo urna gravida a. Quisque semper leo id sapien ultrices posuere. Donec gravida vulputate turpis, vel convallis mi aliquam sit amet. Aliquam erat volutpat. Suspendisse interdum ultrices lorem, at efficitur lectus aliquet sed. Donec hendrerit tortor tortor, ut venenatis tortor viverra sit amet.';
  constructor() {
    this.type = this.segmentList[0];
  }

  segmentSelected(index) {
    console.log(index);
    this.swiper.swiperRef.slideTo(index);
  }

  setSwiperInstance(swiper) {
    this.slides = swiper;
    }
    
  onSlideChange() {
    this.type = this.segmentList[this.slides.activeIndex];
    this.segComponent.value = this.type;
    }

  ngOnInit(): void {
    //console.log('type', this.segmentType);
  }
}

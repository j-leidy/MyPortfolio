# John Leidy II Portfolio Website

<p align="center">
    <img width="410" height="910" src="https://github.com/j-leidy/MyPortfolio/blob/main/public/LandingScreenshot.png">
</p>

## Built using React.js

Please take a look at the new and improved portfolio written in Typescript and built with React!
<a href="https://github.com/j-leidy/NewPortfolio">New Portfolio</a>

## Code Details Section:

### Intersection Observer

<details>

<summary>View Code</summary>

#### JS File inside of your function component

```Javascript
const AboutTitleRef = useRef();
const [TitleVisible, setTitleVisible] = useState();

useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
        setTitleVisible(entry.isIntersecting)
        console.log(TitleVisible)
    });
    observer.observe(AboutTitleRef.current)
},[AboutTitleRef,TitleVisible]);

return(
    <AboutTitle ref={AboutTitleRef} inView = {TitleVisible}>
        About
    </AboutTitle>
)
```

#### Styled Component for Title

```Javascript
export const AboutTitle = styled.div`
    transition: 3s all ease;
    opacity: ${(props) => (props.inView ? "1" : "0")};
`;

```

</details>

### Tracking state of a checkbox in a class component

<details>

<summary>View Code</summary>

#### JS File inside of your class component

```Javascript
constructor(){
    super()
    this.state = {
        checked : false
    }

    this.checkRef = React.createRef();
    this.handleCheckbox = this.handleCheckbox.bind(this);
}


handleCheckbox(event){
    if(event === true){
        //this is if the checkbox is checked
        this.setState({
            checked : event
        },() => {})
    }
    if(event === false){
        //this is if the checkbox is not checked
        this.setState({
            checked : event
        },() => {})
    }
};

render(){return(
    <Checkbox
    ref = {this.checkRef}
    onChange = {(e) => this.handleCheckbox(e.target.checked)}
    />
)}
```

</details>

### Passing setState into a class component to set the state for use in another component

<details>

<summary>View Code</summary>

```
function App() {
  const [lightordark, setLightOrDark] = React.useState(false)
  return (
    <div className='remove_scroll'>
      <ParticlesComponent active = {lightordark}/>
      <MainPage setLightOrDark = {setLightOrDark}/>
    </div>

  );

};
```

</details>

## Below are more screenshots of the website:

<details>

<summary> Images </summary>

### Landing / Hero Section

![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotPortfolio.png)

### About Me

![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotAboutMe.png)

### Projects

![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotProjects.png)

### Degrees

![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotDegrees.png)

### Experience / Footer

![alt text](https://github.com/j-leidy/MyPortfolio/blob/main/src/Images/ScreenShotExperienceFooter.png)

</details>

## You can also directly visit the live website:

https://leidydev.netlify.app/

**Thanks for stopping by!**

### John

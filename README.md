<style>
green = {color : green}
</style>


# John Leidy II Portfolio Website
## Built using React.js

This website is pretty straight forward. This is the implementation for Netlify. I am currently not using a backend, however I have a codebase with a backend fully implemented. 
That website is on a MERN stack. Below I will add some documentation on specific sections of the website I think are useful for others. Open to suggestions on ways to improve my implementation.

## Code Details Section:

<green>Intersection Observer</green>
<details>

<summary>View Code</summary>

#### JS File inside of your function component
```
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
```
export const AboutTitle = styled.div`
    transition: 3s all ease;
    opacity: ${(props) => (props.inView ? "1" : "0")};
`;

```
</details>

### Tracking state of a checkbox in a class component
<details>

<summary>View Code</summary>

#### JS File inside of your function component
```
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



## Below are screenshots of the website:
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

__Thanks for stopping by!__



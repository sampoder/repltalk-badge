import Head from 'next/head'
import { 
  Page,
  Text,
  Image,
  Spacer,
  Input,
  Select,
  Grid,
  Button,
  Display,
  Description,
  Code
} from '@geist-ui/react'
import { useEffect, useState } from 'react';

export default function Home() {
  const [id, setId] = useState(null);
  const [style, setStyle] = useState("flat");
  const [theme, setTheme] = useState("light");
  const [featured, setFeatured] = useState(null);
  const [repl, setRepl] = useState(null);
  const [font, setFont] = useState(null);
  const [url, setUrl] = useState("https://replit-badge.vercel.app/api?id=123456");
  const [post, setPost] = useState("https://replit.com/talk/share/HelloWorld/123456");
  
  const onChangeUrl = (event) => {
    let url;
    try {
      url = new URL(event.target.value);
    } catch (_) {
      return;  
    }
    setPost(url);
    const parts = new URL(url).pathname.split('/'); // handle potential trailing slash
    setId(+(parts.pop() || parts.pop())); // casts to number before setting state
  }
  const onChangeStyle = (value) => {
    if(value === "1")
      setStyle("flat");
    else
      setStyle("gradient");
  }
  const onChangeTheme = (value) => {
    if(value === "1")
      setTheme("light");
    else
      setTheme("dark");
  }
  const onChangeFeatured = (event) => {setFeatured(event.target.value);}
  const onChangeRepl = (event) => {setRepl(event.target.value);}
  const onChangeFont = (event) => {setFont(event.target.value);}

  useEffect(() => {
    setUrl(encodeURI(
      "https://replit-badge.vercel.app/api?id=" +
      (id ? id : 123456) +
      (style === "flat" ? "" : "&style=gradient") +
      (theme === "light" ? "" : "&theme=dark") +
      (featured ? ("&featuredOn="+featured) : "") +
      (repl ? ("&replTalk="+repl) : "") +
      (font ? ("&font="+font) : "")));
  });

  return (
    <Page>
      <Head>
        <title>Repl Talk Badge Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Text h1 size="2em" style={{textAlign:"center", margin: "1em 0"}}>Repl Talk Badge Generator</Text>
      <Grid.Container>
        <Grid xs={24} sm={24} md={12} style={{display: "block"}}>
          <div style={{textAlign: 'center'}}>
            <Text>Repl Talk URL</Text>
            <Input placeholder="https://replit.com/talk/share/HelloWorld/123456" onChange={onChangeUrl} width="24em"/>
          </div>
          <Spacer y={1} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Style</Text>
          <Select placeholder="Choose one" initialValue="1" onChange={onChangeStyle}>
            <Select.Option value="1">Flat</Select.Option>
            <Select.Option value="2">Gradient</Select.Option>
          </Select>
          <Spacer y={.5} />
          
          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Theme</Text>
          <Select placeholder="Choose one" initialValue="1" onChange={onChangeTheme}>
            <Select.Option value="1">Light</Select.Option>
            <Select.Option value="2">Dark</Select.Option>
          </Select>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Alternate Text 1</Text>
          <Input placeholder="Featured On" onChange={onChangeFeatured}/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Alternate Text 2</Text>
          <Input placeholder="Repl Talk" onChange={onChangeRepl}/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Font</Text>
          <Input placeholder="IBM Plex Sans" onChange={onChangeFont}/>
          <Spacer y={1} />

          {/*<Button auto type="secondary-light" style={{display: "block", margin: "auto"}}>Generate badge</Button>*/}
        </Grid>
        <Grid xs={24} sm={24} md={12} style={{display: "block"}}>
          <Spacer y={2} />
          <Display shadow caption="Badge Preview">
            <Image src={url} alt="Error: Invalid ID"/>
          </Display>
          <Description title="Markdown" content={
            <Code block>{
              `[![Repl Talk Badge](${url})](${post})`
            }</Code>
          } />
          <Description title="HTML" content={
            <Code block>{
`<a href="${post}">
  <img src="${url}" alt="Repl Talk Badge">
</a>`
            }</Code>
          }/>
        </Grid>
      </Grid.Container>
      <Page.Footer style={{textAlign: "center"}}>
        <Text>This site is <a href="https://github.com/googol88/repltalk-badge">open source</a>!</Text>
      </Page.Footer>
    </Page>
  )
}

# LWC Render Lifecycle Hook Example

An example of how to use the render() lifecycle hook to switch between templates in a Lightning web component

## Installation via SFDX

1. Create a scratch org:
```
sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-render-hook-example
```

2. Push the app to your scratch org:
```
sfdx force:source:push
```

3. Assign the **LWC Render Lifecycle Hook Example** permission set to the default user:
```
sfdx force:user:permset:assign -n LWC_Render_Lifecycle_Hook_Example
```

4. Open the scratch org:
```
sfdx force:org:open
```

5. In App Launcher, select the **LWC Render Lifecycle Hook Example** app.

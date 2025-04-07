# CdVisualizer

## First PR
The first thing to notice is that if the highest level of the component overwrites the change detection.

But I found a weird behavior where, let's assume that the ParentComponent is using the Default strategy and the ChildComponent is using OnPush. The ParentComponent will make the ChildComponent trigger more events but the ChildComponent won't rerender the page like the ParentComponent does. So if we update a counter using a setInterval and show the counter in the HTML (for both components), the ParentComponent will show the counter being increased in the page, but the ChildComponent won't update the counter in the page even though the ChildComponent is triggering the same events that the ParentComponent does.
# Uses

**Here's some stuff I use**

- SvelteKit
- VS Code
- Emojis 😎

| Hello |
|-------|
| oh |

```cs
using UnityEngine;

using HeavenStudio;

namespace HeavenStudio.Games
{
    public class ExampleGame : Minigame
    {
        public Animation referenceAnimation;

        public void Update()
        {
            // If the songPositionInBeats is 1, this will return 0.5f;
            float normalizedAnimTime = Conductor.instance.GetPositionFromBeat(0, 2f);

            referenceAnimation.Play("Bounce", 0, normalizedAnimTime);
        }
    }
}

```
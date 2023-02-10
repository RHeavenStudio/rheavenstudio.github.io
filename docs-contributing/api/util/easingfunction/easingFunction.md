# EasingFunction

Used to lerp between 2 or more points using a concept known as "easing".

## Example

```cs
using UnityEngine;

using HeavenStudio.Util;

namespace HeavenStudio
{
    public class ExampleGame : Minigame
    {
        private EasingFunction.Function _easeFunc;

        public void Start()
        {
            _easeFunc = EasingFunction.GetEasingFunction(EasingFunction.Ease.EaseOutExpo);

            // Every two seconds, move the object 8 units to the right using EaseOutExpo.
            // _easeFunc in this instance, is similar to UnityEngine.Mathf.Lerp. 
            float normalizedTime = Mathf.Repeat(0, 2);
            transform.position = new Vector3(_easeFunc(0, 8, normalizedTime), 0, 0);
        }
    }
}

```

## Public Methods

| Name              | Info                                                        | Returns                 |
| ----------------- | ----------------------------------------------------------- | ----------------------- |
| GetEasingFunction | Returns the function associated to the easingFunction enum. | EasingFunction.Function |

## Public Members

| Name         | Info                                                                            | Type |
| ------------ | ------------------------------------------------------------------------------- | ---- |
| [Ease](ease) | Enum used to define the `easingFunction` in `EasingFunction.GetEasingFunction`. | enum |
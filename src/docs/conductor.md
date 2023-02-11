---
title: Conductor
date: "2/10/22"
authors:
    - name: Starpelly
---

The `Conductor` is responsible for all beat and time management in Heaven Studio. 

The `Conductor` is mostly used in games to calculate the positions of animations, and when sounds should be played.

You can play a single `AudioClip` using `Play`, `Pause` and `Stop`. You can adjust its volume with `SetVolume`, or seek using the multiple *songPositions*.

## Example

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

## Public Properties

| Name                        | Info                                                                                                   | Returns     |
| --------------------------- | ------------------------------------------------------------------------------------------------------ | ----------- |
| songBpm                     | Song beats per minute. This is determined by the song you're trying to sync up to.                     | float       |
| secPerBeat                  | The number of seconds for each song beat.                                                              | float       |
| pitchedSecPerBeat           | The number of seconds for each song beat, inversely scaled to song pitch (higer pitch = shorter time). | float       |
| songPosition                | Current song position, in seconds.                                                                     | float       |
| songPositionAsDouble        | Current song position, in seconds.                                                                     | double      |
| songPositionInBeats         | Current song position, in beats.                                                                       | float       |
| songPositionInBeatsAsDouble | Current song position, in beats.                                                                       | double      |
| dspStartTimeAsDouble        | The `dspTime` the `Conductor` started at.                                                              | double      |
| startBeatAsDouble           | The beat we started at. (double)                                                                       | double      |
| musicSource                 | The `AudioSource` the `Conductor` will read from.                                                      | AudioSource |
| firstBeatOffset             | The offset to the first beat of the song in seconds.                                                   | float       |
| isPlaying                   | Returns true if the `Conductor` is currently playing the selected song.                                | bool        |
| isPaused                    | Returns true if the `Conductor` is currently paused, but not fully stopped.                            | bool        |
| metronome                   | If enabled, a metronome will play a *tick* sound every beat.                                           | bool        |
| timeSinceLastTempoChange    | The time in seconds since the `songBpm` changed.                                                       | float       |

## Public Methods

| Name                         | Info                                                                                          | Returns |
| ---------------------------- | --------------------------------------------------------------------------------------------- | ------- |
| SetBeat                      | The "proper" way of setting the current beat of the `Conductor`.                              | void    |
| Play                         | Plays the song at a specified beat.                                                           | void    |
| Pause                        | Pauses the song.                                                                              | void    |
| Stop                         | Stops the song while setting the current `time`.                                              | void    |
| ReportBeat                   | Returns true if `songPositionInBeats` is greater than the `lastReportedBeat`.                 | bool    |
| GetLoopPositionFromBeat      | Loops between 2 points in the beat position.                                                  | float   |
| GetPositionFromBeat          | Returns a normalized position between 2 beats.                                                | float   |
| GetBeatFromPosition          | Opposite of `GetPositionFromBeat`. Returns the corresponding beat from a normalized position. | float   |
| GetPositionFromMargin        | Returns the "closeness" to a given beat as a normalized value.                                | float   |
| GetBeatFromPositionAndMargin | Same as `GetBeatFromPosition`, with margin included.                                          | float   |
| GetBpmAtBeat                 | Returns the tempo at a given beat with `TempoChange`s in mind.                                | float   |
| GetSongPosFromBeat           | Returns the song time from the given beat.                                                    | double  |
| GetBeatFromSongPos           | Returns the beat from the given song time.                                                    | double  |
| BeatsToSecs                  | Converts `beats` to realtime seconds.                                                         | double  |
| SecsToBeats                  | Converts `seconds` to beats.                                                                  | double  |
| GetRestFromRealTime          | Convert real seconds to beats.                                                                | double  |
| SetBpm                       | Sets the tempo of the `Conductor`.                                                            | void    |
| SetVolume                    | Sets the volume of the `musicSource`.                                                         | void    |
| SongLengthInBeats            | The total length of the song, in beats.                                                       | float   |
| SongPosLessThanClipLength    | Returns true if the given `t` is less than the length of the `musicSource` clip in seconds.   | bool    |
| NotStopped                   | Returns true if `isPlaying` and `isPaused` is true.                                           | bool    |
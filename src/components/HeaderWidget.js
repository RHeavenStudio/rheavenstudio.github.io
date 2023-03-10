import React from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

export const HeaderBadgesWidget = ({ commaDelimitedContributors, lastDateString, lastVerifiedDateString, lastVerifiedVersionString }) => {
    let githubUsernames = {
		Starpelly : "Starpelly",
		Saraistupid : "Saraistupid",
		Zeo : "ThatZeoMan"
	};

    let buildAuthorBadge = function (authorNickname) {
		return (
			<a class="header-badge" href={`https://github.com/${githubUsernames[authorNickname]}`}>
				<span class="badge-avatar" style={{ backgroundImage: "url('https://avatars.githubusercontent.com/" + githubUsernames[authorNickname] + "')" }}></span>
				<span class="badge-label">{authorNickname}</span>
			</a>
		)
	}

    let buildLastVerifiedBadge = function (dateString, versionString) {
		if (dateString != null && versionString != null) {
			return (
				<a class="header-badge">
					<span class="badge-avatar emoji-avatar">✔️</span>
					<span class="badge-label">Last verified on <strong>{dateString}</strong> using HS {versionString}</span>
				</a>
			)
		}
	}

	let lastModifiedBadge = function(dateString) {
		if (dateString != null) {
			return (
				<a class="header-badge">
					<span class="badge-label">Last modified on <strong>{new Date(dateString).toDateString()}</strong></span>
				</a>
			)
		}
	}

    return (
		<BrowserOnly>
			{() =>
				<div class="header-badges">
					{(commaDelimitedContributors != null ? commaDelimitedContributors.split(',').map(buildAuthorBadge) : null)}
					<br></br>
					{lastModifiedBadge(lastDateString)}
					{buildLastVerifiedBadge(lastVerifiedDateString, lastVerifiedVersionString)}
					<br></br>
					<a class="header-badge" href={`https://github.com/rheavenstudio/rheavenstudio.github.io/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)`}>
						<span class="badge-avatar emoji-avatar">✏️</span>
						<span class="badge-label">Request an update</span>
					</a>
				</div>
			}
		</BrowserOnly>
	);
};
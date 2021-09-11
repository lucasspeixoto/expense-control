import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-loading',
	template: `
		<div class="d-flex justify-content-center spinner-container">
			<div class="spinner-grow" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	`,

	styles: [
		`
			.spinner-container {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				padding: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(0, 0, 0, 0.32);
				z-index: 20000;
			}

			.spinner-border {
				width: 100px;
				height: 100px;
			}

			:host ::ng-deep .custom-spinner .p-progress-spinner-circle {
				animation: custom-progress-spinner-dash 1.5s ease-in-out infinite,
					custom-progress-spinner-color 0.5s ease-in-out infinite;
			}

			@keyframes custom-progress-spinner-color {
				100%,
				0% {
					stroke: #21367f;
				}
				40% {
					stroke: #194e91;
				}
				66% {
					stroke: #068bc0;
				}
				80%,
				90% {
					stroke: #0298ca;
				}
			}
		`,
	],
})
export class LoadingComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

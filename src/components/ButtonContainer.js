import React from 'react'
import { FilePicker } from 'react-file-picker'
import Spinner from './Spinner'

function ButtonContainer({
	createRecord,
	cleanUpInvalidRecords,
	exportAndDownloadCSV,
	handleCsvImport,
	loading,
}) {
	return (
		<div className="button-container">
			<div className="buttons">
				<button className="button is-primary is-rounded" onClick={createRecord}>
					Create Record
				</button>
				<button className="button is-rounded" onClick={cleanUpInvalidRecords}>
					Delete invalid records
				</button>
				<button className="button is-rounded" onClick={exportAndDownloadCSV}>
					Export as CSV
				</button>
				<div className="fileUploader">
					<FilePicker
						extensions={['csv']}
						maxSize={100}
						onChange={(importCsvFile) => handleCsvImport(importCsvFile)}
						onError={(err) => {
							console.log('Upload error', err)
							alert(err.toString())
						}}
					>
						<button className="button is-rounded">Import from CSV</button>
					</FilePicker>
				</div>
				{loading && <Spinner />}
			</div>
		</div>
	)
}

export default ButtonContainer
